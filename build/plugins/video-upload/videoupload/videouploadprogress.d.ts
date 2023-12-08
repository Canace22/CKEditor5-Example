export default class VideoUploadProgress extends Plugin {
    static get pluginName(): string;
    constructor(editor: any);
    placeholder: string;
    init(): void;
    uploadStatusChange(evt: any, data: any, conversionApi: any): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
