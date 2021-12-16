// /* eslint-disable */
// import React, { useState, useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import firebaseConfig from './firebaseConfig.js'
// import { Input, Paper, Stack } from '@mui/material';
// import { PDFUploadButton, PDFDownloadButton } from './FileButtons';

// export const FileView = (props) => {
//   return (
//     <Paper>
//       <Stack>
//         <a href={props.url}>View Resume</a>
//         <iframe src={`${props.url}&embedded=true`} width="250" height="300" frameBorder="0" />
//       </Stack>
//     </Paper>
//   )
// }

// export const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [downloadURL, setDownloadURL] = useState(null);

//   const firebaseApp = initializeApp(firebaseConfig);
//   const storage = getStorage(firebaseApp);

//   useEffect(async () => {
//     if (!file) return;
//     console.log('file: ', file, file.type);
//     const fileRef = ref(storage, `resumes/${file.name}`);
//     console.log('fileref: ', fileRef)

//     uploadBytes(fileRef, file)
//       .then((snapshot) => {
//         getDownloadURL(fileRef)
//           .then((url) => { setDownloadURL(url); console.log(url) })
//       })
//       .catch((err) => console.log(err));
//   }, [file]);


//   const fileSelect = async (e) => {
//     setFile(e.target?.files[0]);
//   }

//   return (
//     <div>
//       {/* <label htmlFor="Resume">Upload props</label> */}
//       <input type="file" name="Resume" onChange={fileSelect} />
//       <hr />
//       {downloadURL && <FileView url={downloadURL} />}
//     </div>
//   )
// }


// const FileViewAndUpload = (props) => {
//   let { url } = props
//   let label = props.fileUse === 'resume' ? 'Resume' : 'Cover Letter'
//   return (
//     <Paper>

//       <label htmlFor='upload-file'>
//         <Input id='upload-file' accept='.pdf' type='file'></Input>
//         <PDFUploadButton fileUse={props.fileUse} {...{ label }} />
//         <PDFDownloadButton fileUse={props.fileUse} {...{ url, label }} />
//       </label>
//     </Paper>
//   )
// }

// export default FileViewAndUpload;



// Save url after upload in database
// conditionally render iframe whether file exists or not
// style with basic css