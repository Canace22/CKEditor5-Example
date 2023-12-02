/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Code, Italic, Strikethrough, Underline, } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontSize, } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { DataFilter, DataSchema } from '@ckeditor/ckeditor5-html-support';
import { AutoImage, } from '@ckeditor/ckeditor5-image';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.
class Editor extends ClassicEditor {
}
Editor.builtinPlugins = [
    AutoImage,
    AutoLink,
    Autoformat,
    SimpleUploadAdapter,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    DataFilter,
    DataSchema,
    Essentials,
    FontBackgroundColor,
    FontColor,
    FontSize,
    Heading,
    Highlight,
    // Image,
    // ImageCaption,
    // ImageResize,
    // ImageStyle,
    // ImageToolbar,
    // ImageUpload,
    Italic,
    Link,
    List,
    ListProperties,
    // Markdown,
    Paragraph,
    Strikethrough,
    TodoList,
    Underline,
];
Editor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'fontSize',
            '|',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'imageUpload',
            'codeBlock',
            'link',
            'bulletedList',
            'numberedList',
            'todoList',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'code',
            'blockQuote',
            'highlight',
            'markdown'
        ],
    },
    language: 'zh-cn',
    image: {
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
        ],
    },
};
export default Editor;
//# sourceMappingURL=ckeditor.js.map