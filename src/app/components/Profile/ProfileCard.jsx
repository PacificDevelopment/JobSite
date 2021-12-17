/* eslint-disable */
import React, { useContext } from 'react';
import UploadAvatar from './UploadAvatar'
import ProfileTextForm from './ProfileTextForm'
import { Card, CardActions, Divider, Typography, Stack } from '@mui/material';
import PrimaryButton from '../PrimaryButton'
import {ProfileContext} from './ProfileContext'

const ProfileCard = (props) => {
  let { disabled, setDisabled } = useContext(ProfileContext);

  return (
    <Card sx={{ m: 3, p: 3 }}>
      <Stack direction='row'>
        <Typography variant='h4'>Your Details</Typography>
      </Stack>
      <Stack direction='row'>
        <Stack sx={{ p: 2 }}>
          <UploadAvatar children={props.children} {...{ disabled }} />
        </Stack>
        <Divider orientation='vertical' />
        <Stack>
          <ProfileTextForm  {...{ disabled }} />
        </Stack>
      </Stack>
      <CardActions>
        <PrimaryButton
          onClick={() => setDisabled(d => !d)}
          sx={{ position: 'absolute', right: 150 }}
          text='Edit'
        />
      </CardActions>
    </Card>
  )
}

export default ProfileCard;