/* eslint-disable */
import React, { useContext } from 'react';
import UploadAvatar from './UploadAvatar'
import ProfileTextForm from './ProfileTextForm'
import { Card, CardActions, Divider, Typography, Stack } from '@mui/material';
import SecondaryButton from '../SecondaryButton'
import { ProfileContext } from './ProfileContext'

const ProfileCard = (props) => {
  let { disabled, setDisabled } = useContext(ProfileContext);
  let text = disabled ? 'Edit' : 'Update'

  return (
    <Card sx={{ m: 3, p: 3 }}>
      <Stack direction='row' >
        <Typography variant='h4'>Your Details</Typography>
      </Stack>
      <Stack direction='row'>
        <Stack sx={{ p: 2 }}>
          <UploadAvatar children={props.children} />
        </Stack>
        <Divider orientation='vertical' />
        <Stack>
          <ProfileTextForm  {...{ disabled }} />
          <SecondaryButton
            fullWidth
            onClick={() => setDisabled(d => !d)}
            orientation={{ vertical: 'bottom' }}
            {...{ text }}
          />
        </Stack>
      </Stack>
    </Card>
  )
}

export default ProfileCard;