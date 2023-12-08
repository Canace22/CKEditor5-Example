export default class VideoResizeEditing extends Plugin {
    static get requires(): (typeof VideoUtils)[];
    static get pluginName(): string;
    constructor(editor: any);
    init(): void;
    _registerSchema(): void;
    _registerConverters(videoType: any): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUtils from "../videoutils";
