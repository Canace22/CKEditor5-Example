/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Code, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { DataFilter, DataSchema } from '@ckeditor/ckeditor5-html-support';
import { AutoImage, Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { VideoUpload, VideoToolbar, VideoInsert } from './plugins/video-upload/index';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
declare function VideoUploadAdapterPlugin(editor: any): void;
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Autoformat | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof CodeBlock | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontSize | typeof Paragraph | typeof Heading | typeof Highlight | typeof DataFilter | typeof DataSchema | typeof SimpleUploadAdapter | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof MediaEmbed | typeof AutoLink | typeof Link | typeof List | typeof ListProperties | typeof TodoList | typeof Alignment | typeof Indent | typeof IndentBlock | typeof VideoUpload | typeof VideoInsert | typeof VideoToolbar)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        image: {
            resizeUnit: "%";
            resizeOptions: ({
                name: string;
                value: null;
                label: string;
            } | {
                name: string;
                value: string;
                label: string;
            })[];
            toolbar: string[];
        };
        extraPlugins: (typeof VideoUploadAdapterPlugin)[];
    };
}
export default Editor;
