import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function MobilePopout() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const navRoutes = [['Log In/ Create an Account', '/login'], ['Find Jobs', '/jobs'], ['Upload Resume', '/profile'], ['For Employers', '/']];

  const toggleDrawer = (open) => (event) => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setModalOpen(open);
  };

  function handleClick(route) {
    navigate(route);
  }

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Button sx={{ p: 2, ml: 28 }}><CloseIcon /></Button>
      <List>
        {navRoutes.map((text, index) => (
          <ListItem button sx={{ borderBottom: 1, borderTop: index === 0 ? 1 : 0, borderColor: 'white' }} onClick={() => handleClick(text[1])} key={text[0]}>
            <ListItemText primary={text[0]} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)} sx={{ p: 2 }}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={modalOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{ sx: { backgroundColor: '#4A485B' } }}
      >
        {list()}
      </SwipeableDrawer>
    </>

  );
}
