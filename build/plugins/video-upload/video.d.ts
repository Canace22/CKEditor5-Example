export default class Video extends Plugin {
    static get requires(): (typeof VideoBlock)[];
    static get pluginName(): string;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import VideoBlock from "./videoblock";
