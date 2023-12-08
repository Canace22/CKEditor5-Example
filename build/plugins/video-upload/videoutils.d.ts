export default class VideoUtils extends Plugin {
    static get pluginName(): string;
    isVideo(modelElement: any): any;
    isInlineVideoView(element: any): any;
    isBlockVideoView(element: any): any;
    insertVideo(attributes?: {}, selectable?: null, videoType?: null): import("@ckeditor/ckeditor5-engine").Element | null;
    getClosestSelectedVideoWidget(selection: any): any;
    getClosestSelectedVideoElement(selection: any): any;
    isVideoAllowed(): boolean;
    toVideoWidget(viewElement: any, writer: any): import("@ckeditor/ckeditor5-engine").ViewElement;
    isVideoWidget(viewElement: any): boolean;
    isBlockVideo(modelElement: any): any;
    isInlineVideo(modelElement: any): any;
    findViewVideoElement(figureView: any): any;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
