/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import { Stack, Divider, Typography, Input, Box, Button, Badge, Avatar, } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import firebaseConfig from '../FileUpload/firebaseConfig.js'
import { ProfileContext } from './ProfileContext'

const AvatarViewAndUpload = (props) => {
  let { avatarURL, setAvatarURL } = useContext(ProfileContext);

  return (
    <Stack direction='row' sx={{ mr: 2 }}>
      <Avatar src={avatarURL} sx={{ height: 64, width: 64 }} />
      <AvatarUpload />
    </Stack>
  )
}

export default AvatarViewAndUpload;








export const AvatarUpload = (props) => {
  let { avatarURL, setAvatarURL } = useContext(ProfileContext);

  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);

  useEffect(async () => {
    if (!file) return;
    console.log('file: ', file, file.type);
    const fileRef = ref(storage, `avatars/${file.name}`);
    console.log('fileref: ', fileRef)

    uploadBytes(fileRef, file)
      .then((snapshot) => {
        getDownloadURL(fileRef)
          .then((pdfURL) => {
            setAvatarURL(pdfURL)
            axios({
              url: 'http://localhost:3000/data/upload',
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              data: {
                pdfURL,
                fileUse: 'profile_img',
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

  useEffect(() => {
    axios.get(`/data/getPDF/${'profile_img'}`)
      .then((data) => {
        setAvatarURL(data?.data)
      })
      .catch((err) => console.error(err));
  }, []);

  const fileSelect = async (e) => {
    setFile(e.target.files?.[0])
  };


  return (
<>
        <Input
          id={'avatar'}
          accept='image/*'
          type='file'
          onChange={fileSelect}
          sx={{ display: 'none' }}
        />
        <label htmlFor='avatar'>
        <Badge
        overlap='circular'
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClick={fileSelect}
        badgeContent={<Avatar sx={{ height: 24, width: 24, bgcolor: '#85cdd2' }}>
          <Edit
            sx={{ height: 20, width: 20 }}
          />
        </Avatar>
        }
      />
      </label>
        {/* <FileButton
          component='a'
          label={'Upload ' + label}
          fullWidth={true}
        /> */}
      </>
  )
}
