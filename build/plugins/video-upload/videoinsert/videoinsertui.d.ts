export default class VideoInsertUI extends Plugin {
    static get pluginName(): string;
    init(): void;
    _createDropdownView(locale: any): any;
    _setUpDropdown(dropdownView: any, videoInsertView: any, command: any): any;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
