export default class VideoResize extends Plugin {
    static get requires(): (typeof VideoResizeEditing | typeof VideoResizeHandles | typeof VideoResizeButtons)[];
    static get pluginName(): string;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoResizeEditing from "./videoresize/videoresizeediting";
import VideoResizeHandles from "./videoresize/videoresizehandles";
import VideoResizeButtons from "./videoresize/videoresizebuttons";
