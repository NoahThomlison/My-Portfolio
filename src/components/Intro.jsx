import {Container, Box, Typography, Button, ThemeProvider } from '@mui/material';

const Intro = ({fullpageApi, theme}) => {
  return (
    <div className="section heroImageAlt">
      <ThemeProvider theme={theme}>
        <Container sx={{position: "relative", bottom: "150px", color:"#FFFFFF", paddingTop: "100px"}}>
            <Typography variant="h1">
              Hi, I'm Noah.
            </Typography>
            <Typography variant="h2">
              Full Stack Web Developer. 
            </Typography>
            <Typography variant="h4">
              JS, React, Python, Ruby.        
            </Typography>
            <Box className="buttonContainer" >
              <Button variant="outlined" onClick={() => fullpageApi.moveTo(2)} className="buttonLeft button">About me</Button>
              <Button variant="outlined" onClick={() => fullpageApi.moveTo(3)} className="buttonMiddle button">My Work</Button>
              <Button variant="outlined" onClick={() => fullpageApi.moveTo(4) } className="buttonRight button" >Contact me</  Button>
            </Box>
        </Container>
    </ThemeProvider>
    </div>

  );
};

export default Intro;
