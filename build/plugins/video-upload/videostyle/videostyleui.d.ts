export default class VideoStyleUI extends Plugin {
    static get requires(): (typeof VideoStyleEditing)[];
    static get pluginName(): string;
    get localizedDefaultStylesTitles(): {
        'Wrap text': string;
        'Break text': string;
        'In line': string;
        'Full size video': string;
        'Side video': string;
        'Left aligned video': string;
        'Centered video': string;
        'Right aligned video': string;
    };
    init(): void;
    _createDropdown(dropdownConfig: any, definedStyles: any): void;
    _createButton(buttonConfig: any): void;
    _executeCommand(name: any): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoStyleEditing from "./videostyleediting";
