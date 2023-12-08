export default class VideoInsert extends Plugin {
    static get pluginName(): string;
    static get requires(): (typeof VideoUpload | typeof VideoInsertUI)[];
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUpload from "./videoupload";
import VideoInsertUI from "./videoinsert/videoinsertui";
