export default class VideoTypeCommand extends Command {
    constructor(editor: any, modelElementName: any);
    _modelElementName: any;
    execute(): {
        oldElement: any;
        newElement: any;
    } | null;
}
import { Command } from "@ckeditor/ckeditor5-core";
