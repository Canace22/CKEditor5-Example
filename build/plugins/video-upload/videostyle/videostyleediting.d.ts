export default class VideoStyleEditing extends Plugin {
    static get pluginName(): string;
    static get requires(): (typeof VideoUtils)[];
    init(): void;
    normalizedStyles: any;
    _setupConversion(isBlockPluginLoaded: any, isInlinePluginLoaded: any): void;
    _setupPostFixer(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoUtils from "../videoutils";
