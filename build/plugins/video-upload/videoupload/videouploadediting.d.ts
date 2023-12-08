export function isHtmlIncluded(dataTransfer: any): boolean;
export default class VideoUploadEditing extends Plugin {
    static get requires(): (typeof VideoUtils | typeof Notification | typeof ClipboardPipeline | typeof FileRepository)[];
    static get pluginName(): string;
    constructor(editor: any);
    _uploadVideoElements: Map<any, any>;
    init(): void;
    afterInit(): void;
    _readAndUpload(loader: any): any;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUtils from "../videoutils";
import { Notification } from "@ckeditor/ckeditor5-ui";
import { ClipboardPipeline } from "@ckeditor/ckeditor5-clipboard";
import { FileRepository } from "@ckeditor/ckeditor5-upload";
