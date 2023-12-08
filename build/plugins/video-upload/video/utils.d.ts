export function createVideoViewElement(writer: any, videoType: any): any;
export function getVideoViewElementMatcher(editor: any, matchVideoType: any): ((element: any) => {
    name: boolean;
    attributes: string[];
} | null) | {
    name: string;
    attributes: {
        src: boolean;
    };
};
export function determineVideoTypeForInsertionAtSelection(schema: any, selection: any): "videoBlock" | "videoInline";
