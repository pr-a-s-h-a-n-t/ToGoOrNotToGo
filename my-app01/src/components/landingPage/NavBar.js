import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <>
    
    <Box sx={{ flexGrow: 1,   }}>
      <AppBar position="static" 
      sx={{ background: "aqua",color: "Violet" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
     
    
           variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "papyrus"  }}>
            TrackPlace 🚥
          </Typography>
          <Button color="inherit" sx={{   fontFamily: "papyrus"  }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box></>
  );
}