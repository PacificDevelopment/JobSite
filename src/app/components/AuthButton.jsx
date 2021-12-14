import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Google from '../assets/Google.svg';
import Facebook from '../assets/Facebook logo.svg';
import Apple from '../assets/apple logo.svg';

const fb = {
  backgroundColor: '#3b5998', color: 'white',
};

const apple = {
  backgroundColor: 'black', color: 'white',
};

const google = {
  backgroundColor: 'white', color: 'black',
};

export default function AuthButton({
  text, onClick, styleOverride, textStyleOverride,
}) {
  let type = {};
  let image = null;
  switch (text) {
    case 'Facebook':
      type = fb;
      image = Facebook;
      break;
    case 'Apple':
      type = apple;
      image = Apple;
      break;
    case 'Google':
      type = google;
      image = Google;
      break;
    default:
      type = {};
      break;
  }
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      sx={[{
        textTransform: 'none', p: 2, pl: 2, m: 1, justifyContent: 'start', width: 400,
      }, type, styleOverride]}
    >
      <img src={image} width="20" alt={`${text} logo`} style={{ transform: 'translateY(-5%)' }} />
      <Typography sx={[{ fontWeight: 700, ml: 1 }, textStyleOverride]}>
        Continue with
        {' '}
        {text}
      </Typography>
    </Button>
  );
}
