export default class VideoInlineEditing extends Plugin {
    static get requires(): (typeof VideoUtils | typeof ClipboardPipeline | typeof VideoEditing)[];
    static get pluginName(): string;
    init(): void;
    _setupConversion(): void;
    _setupClipboardIntegration(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUtils from "../videoutils";
import { ClipboardPipeline } from "@ckeditor/ckeditor5-clipboard";
import VideoEditing from "./videoediting";
