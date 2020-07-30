import React from 'react';
// import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

import sampleJpg from 'assets/react-file-viewer-example-files/02-USVI-Solar.jpg';
import sampleJpg360 from 'assets/react-file-viewer-example-files/360photo.jpg';
import sampleAvi from 'assets/react-file-viewer-example-files/drop.avi';
import sampleDoc from 'assets/react-file-viewer-example-files/sample.doc';
import sampleMp3 from 'assets/react-file-viewer-example-files/sample.mp3';
import samplePdf from 'assets/react-file-viewer-example-files/sample.pdf';
import sampleRtf from 'assets/react-file-viewer-example-files/sample.rtf';
import sampleWexbim from 'assets/react-file-viewer-example-files/SampleHouse.wexbim';
import sampleDocx from 'assets/react-file-viewer-example-files/SampleSpec.docx';
import samplePptx from 'assets/react-file-viewer-example-files/SamplePpt.pptx';
import SampleSpreadsheet from 'assets/react-file-viewer-example-files/SimpleSpreadsheet.xlsx';
import SampleSpreadsheet2 from 'assets/react-file-viewer-example-files/Spreadsheet2.xlsx';
import sampleMp4 from 'assets/react-file-viewer-example-files/small.mp4';
import sampleWebm from 'assets/react-file-viewer-example-files/small.webm';
import sampleMov from 'assets/react-file-viewer-example-files/step.mov';
import sampleCsv from 'assets/react-file-viewer-example-files/Total_Crime.csv';

const logger = console;

const sampleFiles = [
  {
    name: 'sampleJpg',
    file: sampleJpg,
    type: 'jpg',
  },
  {
    name: 'sampleJpg360',
    file: sampleJpg360,
    type: 'jpg',
  },
  {
    name: 'sampleAvi',
    file: sampleAvi,
    type: 'avi',
  },
  {
    name: 'sampleDoc',
    file: sampleDoc,
    type: 'doc',
  },
  {
    name: 'sampleMp3',
    file: sampleMp3,
    type: 'mp3',
  },
  {
    name: 'samplePdf',
    file: samplePdf,
    type: 'pdf',
  },
  {
    name: 'sampleRtf',
    file: sampleRtf,
    type: 'rtf',
  },
  {
    name: 'sampleWexbim',
    file: sampleWexbim,
    type: 'wexbim',
  },
  {
    name: 'sampleDocx',
    file: sampleDocx,
    type: 'docx',
  },
  {
    name: 'samplePptx',
    file: samplePptx,
    type: 'pptx',
  },
  {
    name: 'SampleSpreadsheet',
    file: SampleSpreadsheet,
    type: 'xlsx',
  },
  {
    name: 'SampleSpreadsheet2',
    file: SampleSpreadsheet2,
    type: 'xlsx',
  },
  {
    name: 'sampleMp4',
    file: sampleMp4,
    type: 'mp4',
  },
  {
    name: 'sampleWebm',
    file: sampleWebm,
    type: 'webm',
  },
  {
    name: 'sampleMov',
    file: sampleMov,
    type: 'mov',
  },
  {
    name: 'sampleCsv',
    file: sampleCsv,
    type: 'csv',
  },
];

const ReactFileViewer = () => {
  const onError = (e) => {
    logger.log(e, 'error in file-viewer');
  };

  return (
    <>
      {sampleFiles.map((fp) => (
        <div
          style={{ margin: '20px', backgroundColor: '#ccc', padding: '20px' }}
        >
          <h3>{fp.name}</h3>
          <div>
            <FileViewer
              fileType={fp.type}
              filePath={fp.file}
              errorComponent={<CustomErrorComponent />}
              onError={onError}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ReactFileViewer;
