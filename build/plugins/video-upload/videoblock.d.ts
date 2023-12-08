export default class VideoBlock extends Plugin {
    static get requires(): (typeof Widget | typeof VideoBlockEditing)[];
    static get pluginName(): string;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import { Widget } from "@ckeditor/ckeditor5-widget";
import VideoBlockEditing from "./video/videoblockediting";
