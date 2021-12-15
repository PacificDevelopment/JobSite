/* eslint-disable */
import React from 'react';
import { Input, Paper } from '@mui/material';
import FileUploadButton from './FileUploadButton';

const FileViewAndUpload = () => {
  return (
    <Paper>

    <label htmlFor='upload-file'>
      <Input name='upload-file' accept='.pdf' type='file'></Input>
      <FileUploadButton />
    </label>
    </Paper>
  )
}

export default FileViewAndUpload;