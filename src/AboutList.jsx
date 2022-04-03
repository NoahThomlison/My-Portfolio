import {Container, Box, Paper, Typography, ThemeProvider, Button} from '@mui/material';
import WorkHistory from './WorkHistory.jsx';
import Education from './Education.jsx'
import TechStack from './TechStack.jsx'
import About from './About.jsx'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React, { useState } from 'react';


function AboutList({theme}) {
  const [active, setActive] = useState("About")


  return (
    <div className="section aboutMeImage">
    <ThemeProvider theme={theme}>
      <Container>
        <Paper sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: ".75em"}}>
          <Box sx={{padding: "1em", width: "25%"}} className="profilePictureBox">
            <img src={require('./images/profilePic.jpg')} className="profilePicture"/>
          </Box>
          <Box className="profileText" sx={{position: "relative", display: "flex", flexDirection: "column", height: "100%", minHeight: "400px"}}>
            <Box sx={{position: "absolute", top:"0px", display: "flex"}}>
              <Button onClick={(()=> setActive("About"))}>Stuff about me</Button>
              <Button onClick={(()=> setActive("TechStack"))}>Tech I use</Button>
              <Button onClick={(()=> setActive("WorkHistory"))}>Where I worked</Button>
              <Button onClick={(()=> setActive("Education"))}>Where I learned</Button>
            </Box>
            <Box sx={{paddingTop: "50px", minHeight: "350px"}}>
            {active === "About" && <About theme={theme}></About>}
            {active === "TechStack" && <TechStack theme={theme}></TechStack>}
            {active === "WorkHistory" && <WorkHistory theme={theme}></WorkHistory>}
            {active === "AbEducationout" && <Education theme={theme}></Education>}
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>

  )
}


export default AboutList;
