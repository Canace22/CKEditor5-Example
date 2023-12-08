export default class VideoInsertPanelView extends View<HTMLElement> {
    constructor(locale: any, integrations: any);
    insertButtonView: ButtonView;
    cancelButtonView: ButtonView;
    dropdownView: import("ckeditor5/src/ui").DropdownView;
    focusTracker: FocusTracker;
    keystrokes: KeystrokeHandler;
    _focusables: ViewCollection<View<HTMLElement>>;
    _focusCycler: FocusCycler;
    videoURLInputValue: any;
    getIntegration(name: any): any;
    _createDropdownView(locale: any): import("ckeditor5/src/ui").DropdownView;
    _createActionButtons(locale: any): {
        insertButtonView: ButtonView;
        cancelButtonView: ButtonView;
    };
    focus(): void;
}
import { View } from "@ckeditor/ckeditor5-ui";
import { ButtonView } from "@ckeditor/ckeditor5-ui";
import { FocusTracker } from "@ckeditor/ckeditor5-utils";
import { KeystrokeHandler } from "@ckeditor/ckeditor5-utils";
import { ViewCollection } from "@ckeditor/ckeditor5-ui";
import { FocusCycler } from "@ckeditor/ckeditor5-ui";
