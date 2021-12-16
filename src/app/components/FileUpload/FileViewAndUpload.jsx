
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { PDFUploadButton, PDFDownloadButton } from './FileButtons';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseConfig from './firebaseConfig.js'
import axios from 'axios';

const Input = styled('input')({
  // display: 'none',
});

export const FileView = (props) => {
  let label = props.fileUse === 'resume' ? 'Resume' : 'Cover Letter';

  return (
    <Stack>
      <iframe src={`${props.url}&embedded=true`} width="250" height="350" frameBorder="0" />
      <PDFDownloadButton
        fullWidth={false}
        fileUse={props.fileUse}
        url={props.url}
        label={label}
      />
    </Stack>
  )
}

const FileViewAndUpload = (props) => {
  let { fileUse } = props;

  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);

  useEffect(async () => {
    if (!file) return;
    console.log('file: ', file, file.type);
    const fileRef = ref(storage, `resumes/${file.name}`);
    console.log('fileref: ', fileRef)

    uploadBytes(fileRef, file)
      .then((snapshot) => {
        getDownloadURL(fileRef)
          .then((pdfURL) => {
            setDownloadURL(pdfURL)
            axios({
              url: 'http://localhost:3000/data/upload',
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              data: {
                pdfURL,
                fileUse: props.fileUse,
                userId: props.userId
              },
            })
              .then(console.log)
              .catch(err => console.error(err))
          })
          .then(console.log)
          .catch(err => console.error(err))
      })
      .catch((err) => console.log(err));
  }, [file]);


  const fileSelect = async (e) => {
    setFile(e.target.files[0])
  };

  let label = fileUse === 'resume' ? 'Resume' : 'Cover Letter';

  return (

    <form>
      <Input id='file-upload' accept='.pdf' type='file' onChange={fileSelect} />
      {downloadURL && <FileView url={downloadURL} {...{ fileUse }} />}
    </form>
  )
}

export default FileViewAndUpload;
