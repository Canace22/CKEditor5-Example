/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Underline
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import {
  FontBackgroundColor,
  FontColor,
  FontSize
} from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { DataFilter, DataSchema } from '@ckeditor/ckeditor5-html-support';
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload
} from '@ckeditor/ckeditor5-image';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
// import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import {
  VideoUpload,
  Video,
  VideoResize,
  VideoToolbar,
  VideoStyle,
  VideoInsert,
  VideoUploadAdapter
} from './plugins/video-upload/index';
// import {
//   Table,
//   TableToolbar,
//   TableProperties,
//   TableCellProperties
// } from '@ckeditor/ckeditor5-table';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

function VideoUploadAdapterPlugin(editor: any) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
    return new VideoUploadAdapter(
      loader,
      editor.config.get('simpleUpload')
    );
  };
}

function SetDefaultImageSize(editor: any) {
  editor.conversion.for('downcast').add((dispatcher: any) => {
    dispatcher.on('insert:image', (evt: any, data: any, conversionApi: any) => {
      const viewWriter = conversionApi.writer;
      const figure = conversionApi.mapper.toViewElement(data.item);
      
      // 设置默认宽度为50%
      viewWriter.setStyle('width', '50%', figure);
      viewWriter.addClass('image_resized', figure);
      
      // 设置默认行内模式
      viewWriter.addClass('image-style-inline', figure);
    }, { priority: 'low' });
  });
}

function AddCkeVideoControls(editor: any) {
  editor.conversion?.for('downcast')?.add((dispatcher: any) => {
    if (!dispatcher) return;
    dispatcher.on(
      'insert:videoBlock',
      (evt: any, data: any, conversionApi: any) => {
        const viewWriter = conversionApi.writer;
        const $figure = conversionApi.mapper.toViewElement(data.item);
        const $video = $figure.getChild(0);
        viewWriter.setAttribute('controls', true, $video);
        viewWriter.setAttribute('type', 'video/mp4', $video);
        viewWriter.setAttribute('width', 300, $video);
      },
      { priority: 'low' }
    );
    dispatcher.on(
      'insert:videoInline',
      (evt: any, data: any, conversionApi: any) => {
        const viewWriter = conversionApi.writer;
        const $figure = conversionApi.mapper.toViewElement(data.item);
        const $video = $figure.getChild(0);
        if(!$video) return;
        viewWriter?.setAttribute('controls', true, $video);
        viewWriter?.setAttribute('type', 'video/mp4', $video);
        viewWriter?.setAttribute('width', 300, $video);
      },
      { priority: 'low' }
    );
  });
}

class Editor extends ClassicEditor {
  public static override builtinPlugins = [
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
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Italic,
    Link,
    List,
    ListProperties,
    Paragraph,
    Strikethrough,
    TodoList,
    Underline,
    VideoToolbar,
    Video,
    VideoUpload,
    VideoResize,
    VideoStyle,
    VideoInsert,
    MediaEmbed,
    // Table,
    // TableToolbar,
    // TableProperties,
    // TableCellProperties,
    Alignment,
    Indent,
    IndentBlock
  ];

  public static override defaultConfig = {
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
        'outdent',
        'indent',
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
        'videoUpload',
        'insertTable',
        'alignment',
        'indent',
        'outdent',
      ]
    },
    image: {
      resizeUnit: '%' as const,
      resizeOptions: [
        {
          name: 'imageResize:original',
          value: null,
          label: '原始大小'
        },
        {
          name: 'imageResize:50',
          value: '50',
          label: '50%'
        },
        {
          name: 'imageResize:75',
          value: '75',
          label: '75%'
        }
      ],
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        '|',
        'imageResize',
        '|',
        'toggleImageCaption',
        'imageTextAlternative'
      ]
    },
    extraPlugins: [VideoUploadAdapterPlugin, AddCkeVideoControls, SetDefaultImageSize],
  };
}

export default Editor;
