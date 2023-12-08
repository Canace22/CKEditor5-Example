export default class VideoToolbar extends Plugin {
    static get requires(): (typeof VideoUtils | typeof WidgetToolbarRepository)[];
    static get pluginName(): string;
    afterInit(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUtils from "./videoutils";
import { WidgetToolbarRepository } from "@ckeditor/ckeditor5-widget";
