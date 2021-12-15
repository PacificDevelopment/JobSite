// /* eslint-disable */
// import React, { useState, useEffect } from 'react';
// import { Input, Paper } from '@mui/material';
// import { PDFUploadButton, PDFDownloadButton } from './FileButtons';
// import { initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import firebaseConfig from './firebaseConfig.js'


// const FileViewAndUpload = () => {
//   const [file, setFile] = useState(null);
//   const [downloadURL, setDownloadURL] = useState(null);

//   const firebaseApp = initializeApp(firebaseConfig);
//   const storage = getStorage(firebaseApp);

//   useEffect(async () => {
//     if (!file) return;
//     console.log('file: ', file, file.type);
//     if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//       let convertApi = ConvertApi.auth({ secret: 'i2F0vRAqVawi6nfx' })
//       let params = convertApi.createParams()
//       params.add('File', file);
//       setFile(await convertApi.convert('docx', 'pdf', params))
//     }
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
//     setFile(e.target.files[0]);
//   }

//   return (
//     <div>
//       <label htmlFor="Resume">Upload Resume</label>
//       <input type="file" name="Resume" onChange={fileSelect} />
//       <hr />
//       {downloadURL
//         &&
//         (<div>
//           <a href={downloadURL}>View Resume</a>
//           <iframe src={`${downloadURL}&embedded=true`} width="190" height="240px" frameBorder="0" />
//         </div>
//         )}

//     </div>
//   )
// }

// export default FileViewAndUpload;
