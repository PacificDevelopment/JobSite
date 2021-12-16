import React, { useState } from 'react';
import {
  Card, CardActionArea, Typography, Popover,
} from '@mui/material';

export default function CustomCard({ buttonData, centerStyle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    if (!clicked) setAnchorEl(event.currentTarget);
    setClicked(!clicked);
  };

  const handleClose = () => {
    setClicked(false);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card raised sx={{ backgroundColor: '#EDFEFF' }}>
      <CardActionArea aria-describedby={id} onClick={handleClick} sx={[centerStyle, { flexDirection: 'column', width: 300, height: 150 }]}>
        <img src={buttonData[1]} alt={buttonData[0]} width={75} />
        <Typography variant="h5">{buttonData[0]}</Typography>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 2, maxWidth: 350 }}>{buttonData[2]}</Typography>
        </Popover>
      </CardActionArea>
    </Card>
  );
}
