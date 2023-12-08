export default class AutoVideo extends Plugin {
    static get requires(): (typeof VideoUtils | typeof Clipboard | typeof Undo)[];
    static get pluginName(): string;
    constructor(editor: any);
    _timeoutId: any;
    _positionToInsert: LivePosition | null;
    init(): void;
    _embedVideoBetweenPositions(leftPosition: any, rightPosition: any): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import { LivePosition } from "@ckeditor/ckeditor5-engine";
import VideoUtils from "./videoutils";
import { Clipboard } from "@ckeditor/ckeditor5-clipboard";
import { Undo } from "@ckeditor/ckeditor5-undo";
