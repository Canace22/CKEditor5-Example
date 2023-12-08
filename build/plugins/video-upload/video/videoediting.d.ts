export function createVideoViewElement(writer: any): any;
export default class VideoEditing extends Plugin {
    static get requires(): (typeof VideoUtils)[];
    static get pluginName(): string;
    init(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUtils from "../videoutils";
