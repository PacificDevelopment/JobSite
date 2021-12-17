/* eslint-disable */
import React from 'react';
import { Button, Typography } from '@mui/material'

export const FileButton = ({ url, label, component, fullWidth, visible }) => {

  return (
    <Button
      {...{ fullWidth, component, visible }}
      variant='contained'
      color='secondary'
      href={url}
      sx={{ textTransform: 'none', p: 1, pr: 5, pl: 5, mt: 2, mb: 2, display: visible}}
    >
      <Typography>
        {label}
      </Typography>
    </Button>
  )
};
