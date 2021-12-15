import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CustomButton({
  text, onClick, styleOverride, textStyleOverride, fullWidth,
}) {
  return (
    <Button
      fullWidth={fullWidth}
      variant="contained"
      color="secondary"
      onClick={onClick}
      sx={[{
        textTransform: 'none', p: 1, pr: 5, pl: 5, m: 2,
      }, styleOverride]}
    >
      <Typography sx={[textStyleOverride]}>{text}</Typography>
    </Button>
  );
}
