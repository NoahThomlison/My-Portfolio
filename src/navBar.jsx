import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1, position: "absolute", zIndex: "1", width: 1, opacity: "0.9"}}>
      <AppBar position="static" sx={{ backgroundColor: "#000000", alignItems: "flex-end"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <a href="https://github.com/NoahThomlison">
                <GitHubIcon sx={{color: "#FFFFFF"}}/>
              </a>
            </IconButton>
    
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <a href="mailto:noahthomlison@gmail.com">  
                <EmailIcon sx={{color: "#FFFFFF"}}/>
              </a>
            </IconButton>
    
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <a href="https://www.linkedin.com/in/noahthomlison/">
                <LinkedInIcon sx={{color: "#FFFFFF"}}/>
              </a>
            </IconButton>
    
    
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <a href="https://resume.creddle.io/resume/f5bhq4mil77">
                <ArticleIcon sx={{color: "#FFFFFF"}}/>
              </a>
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}