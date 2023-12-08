export default class VideoUploadAdapter {
    constructor(loader: any, url: any);
    loader: any;
    xhr: XMLHttpRequest | null;
    url: any;
    upload(): any;
    abort(): void;
    _initRequest(): void;
    _initListeners(resolve: any, reject: any, file: any): void;
    _sendRequest(file: any): void;
}
