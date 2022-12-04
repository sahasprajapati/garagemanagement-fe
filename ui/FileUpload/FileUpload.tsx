'use client';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import './filepond.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useState } from 'react';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface IFileUpload {
  allowMultiple: boolean;
  maxFiles: number;
}
export default function FileUpload({ allowMultiple, maxFiles }: IFileUpload) {
  const [files, setFiles] = useState<any[]>([]);
  return (
    <div>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={allowMultiple}
        maxFiles={maxFiles}
        // server="/api"
        dropOnPage={true}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        allowPaste={true}
        imagePreviewMaxFileSize="3MB"
        allowReorder={true}
        allowDrop={true}
        stylePanelAspectRatio="1:1"
        // data-allow-reorder="true"
        // data-max-file-size="3MB"
        // data-max-files="3"
        // imageCropAspectRatio="1:1"
        // imageResizeTargetWidth={200}
        // imageResizeTargetHeight={200}
        // stylePanelLayout=" circle"
        // styleLoadIndicatorPosition="center bottom"
        // styleProgressIndicatorPosition="right bottom"
        // styleButtonRemoveItemPosition="left bottom"
        // styleButtonProcessItemPosition="right bottom"
      />
    </div>
  );
}
