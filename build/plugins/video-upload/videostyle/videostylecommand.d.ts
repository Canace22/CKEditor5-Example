export default class VideoStyleCommand extends Command {
    constructor(editor: any, styles: any);
    _defaultStyles: {
        videoBlock: boolean;
        videoInline: boolean;
    };
    _styles: Map<any, any>;
    execute(options?: {}): void;
    shouldConvertVideoType(requestedStyle: any, videoElement: any): boolean;
}
import { Command } from "@ckeditor/ckeditor5-core";
