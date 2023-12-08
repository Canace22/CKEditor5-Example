export default class VideoInline extends Plugin {
    static get requires(): (typeof Widget | typeof VideoInlineEditing)[];
    static get pluginName(): string;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import { Widget } from "@ckeditor/ckeditor5-widget";
import VideoInlineEditing from "./video/videoinlineediting";
