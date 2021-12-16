import React from 'react';
import { Avatar, Stack, Badge } from '@mui/material';
import { Edit } from '@mui/icons-material';

const UploadAvatar = (props) => {
  let { img } = props

  return (
    <Stack direction='row' sx={{ mr: 2 }}>

      <Avatar src={img} sx={{ height: 64, width: 64 }} />
      <Badge
        overlap='circular'
        src={img}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        badgeContent={<Avatar sx={{ height: 24, width: 24, bgcolor: '#85cdd2' }}>
          <Edit
            sx={{ height: 20, width: 20 }}
            onClick={() => {}}
          />
        </Avatar>
        }
      />
    </Stack>
  )
}

export default UploadAvatar;