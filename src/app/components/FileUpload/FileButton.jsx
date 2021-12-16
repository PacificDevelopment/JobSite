/* eslint-disable */
import React from 'react';
import { Button, Typography } from '@mui/material'

export const PDFButton = ({ url, label, component, fullWidth }) => {
  return (
    <Button
      {...{ fullWidth, component }}
      variant='contained'
      color='secondary'
      href={url}
      sx={{ textTransform: 'none', p: 1, pr: 5, pl: 5, mt: 2, mb: 2, }}
    >
      <Typography>
        {label}
      </Typography>
    </Button>
  )
};
