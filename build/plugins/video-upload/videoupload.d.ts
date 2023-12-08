export default class VideoUpload extends Plugin {
    static get requires(): (typeof VideoUploadUI)[];
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUploadUI from "./videoupload/videouploadui";
