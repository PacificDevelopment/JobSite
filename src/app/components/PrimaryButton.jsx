import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Primary Blue Button

export default function PrimaryButton({
  text, onClick, sx, textStyleOverride, fullWidth,
}) {
  return (
    <Button
      fullWidth={fullWidth}
      variant="contained"
      color="secondary"
      onClick={onClick}
      sx={[{
        textTransform: 'none', p: 1, pr: 5, pl: 5, mt: 2, mb: 2,
      }, sx]}
    >
      <Typography sx={[textStyleOverride]}>{text}</Typography>
    </Button>
  );
}
