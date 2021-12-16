/* eslint-disable */
import React from 'react';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

export const PDFUploadButton = (props) => {
  let {url, fileUse, userId, callback} = props;
  return (
    <PrimaryButton
      component='span'
      onChange={props.upload}
      text={'Upload ' + props.label}
    />
  )
}

export const PDFDownloadButton = (props) => {
  return (
    <SecondaryButton
      onChange={props.onChange}
      href={props.url}
      text={'Download ' + props.label}
    />
  )
};
