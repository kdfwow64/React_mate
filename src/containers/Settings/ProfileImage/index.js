import React from 'react';
import { Row, FullColumn } from '../../../components/utility/rowColumn';
import Dropzone from '../../../components/uielements/dropzone.js';
import notification from '../../../components/notification';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Papersheet from '../../../components/utility/papersheet';
import DropzoneWrapper from './dropzone.style';
import ReactDOMServer from 'react-dom/server';

export default function() {

  const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    method: true,
    showFiletypeIcon: true,
    uploadMultiple: false,
    maxFilesize: 2, // MB
    dictMaxFilesExceeded: 'You can only upload upto 1 image',
    dictRemoveFile: 'Delete',
    dictCancelUploadConfirmation: 'Are you sure to cancel upload?',
    postUrl: 'no-url',
  };

  const djsConfig = { 
    autoProcessQueue: false,
    addRemoveLinks: true,
    previewTemplate: ReactDOMServer.renderToStaticMarkup(
      <div>
        <div className="dz-preview dz-file-preview">
          <div className="dz-details">
            <div className="dz-filename"><span data-dz-name="true"></span></div>
            <img data-dz-thumbnail="true" />
          </div>
        </div>
        <button style={{backgroundColor:'green',color:'white'}}>Change Photo</button>
      </div>
    )
  };
  const eventHandlers = {
    addedfile: file => notification('success', `${file.name} added`),
    success: file =>
      notification('success', `${file.name} successfully uploaded`),
    error: error => notification('error', 'Server is not set in the demo'),
  };
  return (
    <Papersheet title="Change Profile Image">
      <DropzoneWrapper>
        <Dropzone
          config={componentConfig}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
      </DropzoneWrapper>
    </Papersheet>
  );
}
