export default class VideoLoadObserver extends Observer {
    observe(domRoot: any): void;
    /**
     * @inheritDoc
     */
    stopObserving(domRoot: any): void;
    _fireEvents(domEvent: any): void;
}
import { Observer } from "@ckeditor/ckeditor5-engine";
