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
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof AutoImage | typeof AutoLink | typeof Autoformat | typeof SimpleUploadAdapter | typeof BlockQuote | typeof Bold | typeof Code | typeof CodeBlock | typeof DataFilter | typeof DataSchema | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontSize | typeof Heading | typeof Highlight | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Italic | typeof Link | typeof List | typeof ListProperties | typeof Paragraph | typeof Strikethrough | typeof TodoList | typeof Underline | typeof MediaEmbed)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        image: {
            toolbar: string[];
        };
    };
}
export default Editor;
