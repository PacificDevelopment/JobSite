/* eslint-disable */
import React from 'react';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

export const PDFUploadButton = (props) => {
  let {url, fileUse, userId, callback} = props;
  return (
    <PrimaryButton
      component='span'
      // onClick={() => uploadPDF(url, fileUse, userId, callback)}
      text={'UPLOAD ' + props.label}
    />
  )
}

export const PDFDownloadButton = (props) => {
  return (
    <SecondaryButton
      component='a'
      href={props.url}
      text={'Download ' + props.label}
    />
  )
}
