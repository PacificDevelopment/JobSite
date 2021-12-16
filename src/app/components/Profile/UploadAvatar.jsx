import React from 'react';
import { Avatar } from '@mui/material';
// import

// 'profile_img'

const UploadAvatar = (props) => {
  let { img } = props

  return (
    <Avatar src={img} sx={{ height: 64, width: 64 }} />
  )
}

export default UploadAvatar;