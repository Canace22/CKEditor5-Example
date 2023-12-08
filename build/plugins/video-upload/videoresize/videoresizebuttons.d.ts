export default class VideoResizeButtons extends Plugin {
    static get requires(): (typeof VideoResizeEditing)[];
    static get pluginName(): string;
    constructor(editor: any);
    _resizeUnit: any;
    init(): void;
    _registerVideoResizeButton(option: any): void;
    _registerVideoResizeDropdown(options: any): void;
    _getOptionLabelValue(option: any, forTooltip: any): any;
    _getResizeDropdownListItemDefinitions(options: any, command: any): Collection<Record<string, any>>;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import { Collection } from "@ckeditor/ckeditor5-utils";
import VideoResizeEditing from "./videoresizeediting";
