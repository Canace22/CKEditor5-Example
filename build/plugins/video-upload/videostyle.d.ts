export default class VideoStyle extends Plugin {
    static get requires(): (typeof VideoStyleEditing | typeof VideoStyleUI)[];
    static get pluginName(): string;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoStyleEditing from "./videostyle/videostyleediting";
import VideoStyleUI from "./videostyle/videostyleui";
