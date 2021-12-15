import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

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
    <Grid
      xs={3}
      sx={[centerStyle, {
        flexDirection: 'column', justifyContent: 'start', padding: 0,
      }]}
    >
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
    </Grid>
  );
}
