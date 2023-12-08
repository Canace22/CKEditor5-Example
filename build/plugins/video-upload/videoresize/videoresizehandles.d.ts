export default class VideoResizeHandles extends Plugin {
    static get requires(): (typeof WidgetResize)[];
    static get pluginName(): string;
    init(): void;
    _setupResizerCreator(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import { WidgetResize } from "@ckeditor/ckeditor5-widget";
