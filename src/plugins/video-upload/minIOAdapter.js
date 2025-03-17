// import * as CryptoJS from "crypto-js";
import pLimit from "p-limit";
import * as SparkMD5 from "spark-md5";

export default class VideoUploadAdapter {
  constructor(loader, urlConfig) {
    // The file loader instance to use during the upload.
    this.loader = loader;
    this.xhr = null;
    this.urlConfig = urlConfig;
    this.url = null;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const fileSize = file.size;
          if (fileSize < 50 * 1024 * 1024) {
            this.uploadSingleFile(file, resolve, reject);
          } else {
            this.uploadMultiFile(file, resolve, reject);
          }
        })
    );
  }
  async postData(url = "", data = {}, options) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header,
      ...options
    });
    if (!response || response?.error) {
      console.log(response.error);
      return response;
    }
    return response?.json(); // parses JSON response into native JavaScript objects
  }
  async postUpload(url = "", file, options, callback, uploadedSize) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", url, true);
      xhr.responseType = "json";
      xhr.onload = () => {
        const response = xhr.response;
        this.loader.uploaded = uploadedSize;
        callback();
      };
      xhr.onerror = (error) => {
        console.log("error", error);
      };
      xhr.send(file);
      if (xhr.upload) {
        xhr.upload.addEventListener("progress", (evt) => {
          console.log("progress", evt);
          if (evt.lengthComputable) {
            this.loader.uploadTotal = evt.total;
            this.loader.uploaded = evt.loaded;
          }
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  // async applyForSingleFileUpload(file, resolve, reject, callback) {
  //   const genericErrorText = `Couldn't upload file: ${file.name}.`;
  //   try {
  //     let reader = new FileReader();
  //     reader.readAsArrayBuffer(file);
  //     reader.onload = async () => {
  //       const wordArray = CryptoJS.lib.WordArray.create(reader.result);
  //       const hash = CryptoJS.SHA256(wordArray).toString();
  //       const response = await this.postData(
  //         this.urlConfig.applyForSingleFileUpload,
  //         {
  //           projectId: this.urlConfig.projectId,
  //           workItemId: this.urlConfig.workItemId,
  //           name: file.name,
  //           contentType: file.type,
  //           hash,
  //           sourceType: 0,
  //           size: file.size
  //         },
  //         {}
  //       );
  //       if (!response || response.error) {
  //         return reject(
  //           response && response.error
  //             ? response.error.message
  //             : genericErrorText
  //         );
  //       }
  //       const { id, details } = response.data;
  //       const uploadUrl = details[0]?.chunkUploadUrl;
  //       this.urlConfig.id = id;
  //       callback(uploadUrl);
  //     };
  //   } catch (error) {
  //     console.error(error);
  //     reject(genericErrorText);
  //   }
  // }
  // async applyForFileUpload(file, resolve, reject, callback) {
  //   const genericErrorText = `Couldn't upload file: ${file.name}.`;
  //   try {
  //     this.loader.uploadTotal = file.size;
  //     this.loader.uploaded = 0;
  //     let reader = new FileReader();
  //     reader.readAsArrayBuffer(file);
  //     // 这里的reader.result是null hash每次都会一样，因为文件太大MD5计算会报错，先这样，后期再改为计算文件内容的MD5
  //     const wordArray = CryptoJS.lib.WordArray.create(reader.result);
  //     const hash = CryptoJS.SHA256(wordArray).toString();
  //     const response = await this.postData(
  //       this.urlConfig.applyForChunkUpload,
  //       {
  //         projectId: this.urlConfig.projectId,
  //         workItemId: this.urlConfig.workItemId,
  //         name: file.name,
  //         contentType: file.type,
  //         hash,
  //         sourceType: 0,
  //         size: file.size
  //       },
  //       {}
  //     );
  //     if (!response || response.error) {
  //       return reject(
  //         response && response.error ? response.error.message : genericErrorText
  //       );
  //     }
  //     const { id, details } = response.data;
  //     const uploadUrl = details?.map((v) => v.chunkUploadUrl);
  //     this.urlConfig.id = id;
  //     callback(uploadUrl);
  //   } catch (error) {
  //     console.error(error);
  //     reject(genericErrorText);
  //   }
  // }
  createFileChunk(file, chunkSize = 10 * 1024 * 1024) {
    const fileChunkList = [];
    let start = 0;
    let end = chunkSize;
    while (start < file.size) {
      const chunk = file.slice(start, end);
      fileChunkList.push(chunk);
      start = end;
      end = start + chunkSize;
    }

    return fileChunkList;
  }
  getFileChunkListPromise(fileChunkList, uploadUrls, poolLimit = 2) {
    const limit = pLimit(poolLimit);
    return fileChunkList.map((v) => {
      return limit(() => {
        return new Promise((resolve, reject) => {
          this.postUpload(
            uploadUrls.shift(),
            v,
            {
              headers: {
                "Content-Type": "binary/octet-stream"
              }
            },
            () => {
              resolve();
            },
            fileChunkList.reduce((acc, curr) => {
              return acc + curr.size;
            }, 0)
          );
        });
      });
    });
  }
  getMD5(blob, callbackEnd) {
    let blobSlice = File.prototype.slice,
      file = blob,
      chunkSize = 10 * 1024 * 1024, // Read in chunks of 10MB
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader();
    function loadNext() {
      let start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }
    fileReader.onload = function (e) {
      console.log("read chunk nr", currentChunk + 1, "of", chunks);
      spark.append(e.target.result); // Append array buffer
      currentChunk++;
      if (currentChunk < chunks) {
        loadNext();
      } else {
        const md5 = spark.end();
        console.log("finished loading");
        console.info("computed hash", md5); // Compute hash
        callbackEnd(md5);
      }
    };

    fileReader.onerror = (err) => {
      console.warn("oops, something went wrong.");
      this.reject(err);
    };

    loadNext();
  }
  uploadMultiFile(file, resolve, reject) {
    // 申请上传分片文件，拿到所有分片的上传地址，请求上传minIO，查询分片状态，全部chunkSize等于分片size，请求分片合并，拿到上传后的地址填充到富文本里
    this.getMD5(file, async (hash) => {
      const genericErrorText = `Couldn't upload file: ${file.name}.`;
      try {
        const response = await this.postData(
          this.urlConfig.applyForChunkUpload,
          {
            projectId: this.urlConfig.projectId,
            workItemId: this.urlConfig.workItemId,
            name: `${Date.now()}_${file.name}`,
            contentType: file.type,
            hash,
            sourceType: 0,
            size: file.size
          },
          {}
        );
        if (!response || response.error) {
          return reject(
            response && response.error
              ? response.error.message
              : genericErrorText
          );
        }
        const { id, details } = response.data;
        const uploadUrls = details?.map((v) => v.chunkUploadUrl);
        this.urlConfig.id = id;
        const fileChunkList = this.createFileChunk(
          file,
          file.size / uploadUrls.length
        );
        const fileChunkListPromise = this.getFileChunkListPromise(
          fileChunkList,
          uploadUrls
        );
        Promise.all(fileChunkListPromise).then((items) => {
          this.url = this.urlConfig.applyForChunkMerge;
          this._initRequest(file);
          this._initListeners(resolve, reject, file);
          this._sendRequest(file);
        });
      } catch (error) {
        console.error(error);
        reject(genericErrorText);
      }
    });
    // this.applyForFileUpload(file, resolve, reject, async (uploadUrls) => {
    //   const fileChunkList = this.createFileChunk(
    //     file,
    //     file.size / uploadUrls.length
    //   );
    //   const fileChunkListPromise = this.getFileChunkListPromise(
    //     fileChunkList,
    //     uploadUrls
    //   );
    //   Promise.all(fileChunkListPromise).then((items) => {
    //     this.url = this.urlConfig.applyForChunkMerge;
    //     this._initRequest(file);
    //     this._initListeners(resolve, reject, file);
    //     this._sendRequest(file);
    //   });
    // });
  }
  uploadSingleFile(file, resolve, reject) {
    // 申请上传单个文件，拿到上传地址，请求上传minIO，拿到上传后的地址填充到富文本里
    const genericErrorText = `Couldn't upload file: ${file.name}.`;
    this.getMD5(file, async (hash) => {
      try {
        const response = await this.postData(
          this.urlConfig.applyForSingleFileUpload,
          {
            projectId: this.urlConfig.projectId,
            workItemId: this.urlConfig.workItemId,
            name: `${Date.now()}_${file.name}`,
            contentType: file.type,
            hash,
            sourceType: 0,
            size: file.size
          },
          {}
        );
        if (!response || response.error) {
          reject(
            response && response.error
              ? response.error.message
              : genericErrorText
          );
          return;
        }
        const { id, details } = response.data;
        const uploadUrl = details[0]?.chunkUploadUrl;
        this.urlConfig.id = id;
        this.postUpload(
          uploadUrl,
          file,
          {
            headers: {
              "Content-Type": "binary/octet-stream"
            }
          },
          () => {
            this.url = this.urlConfig.applyForCheckInFile;
            this._initRequest(file);
            this._initListeners(resolve, reject, file);
            this._sendRequest(file);
          },
          file.size
        );
      } catch (error) {
        console.error(error);
        reject(genericErrorText);
      }
    });
    // this.applyForSingleFileUpload(file, resolve, reject, async (uploadUrl) => {
    //   const genericErrorText = `Couldn't upload file: ${file.name}.`;
    //   try {
    //     this.postUpload(
    //       uploadUrl,
    //       file,
    //       {
    //         headers: {
    //           "Content-Type": "binary/octet-stream"
    //         }
    //       },
    //       () => {
    //         this.url = this.urlConfig.applyForCheckInFile;
    //         this._initRequest(file);
    //         this._initListeners(resolve, reject, file);
    //         this._sendRequest(file);
    //       },
    //       file.size
    //     );
    //   } catch (error) {
    //     console.error(error);
    //     reject(genericErrorText);
    //   }
    // });
  }
  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());
    // Note that your request may look different. It is up to you and your editor
    // integration to choose the right communication channel. This example uses
    // a POST request with JSON as a data structure but your configuration
    // could be different.
    xhr.open("POST", this.url, true);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;
      console.log("load", response);

      // This example assumes the XHR server's "response" object will come with
      // an "error" which has its own "message" that can be passed to reject()
      // in the upload promise.
      //
      // Your integration may handle upload errors in a different way so make sure
      // it is done properly. The reject() function must be called when the upload fails.
      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      // This URL will be used to display the image in the content. Learn more in the
      // UploadAdapter#upload documentation.
      resolve({
        default: response?.data?.downloadUrl
      });
    });

    // Upload progress when it is supported. The file loader has the #uploadTotal and #uploaded
    // properties which are used e.g. to display the upload progress bar in the editor
    // user interface.
    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    this.xhr.send(
      JSON.stringify({
        id: this.urlConfig.id,
        workItemId: this.urlConfig.workItemId
      })
    );
  }
}
