import {Container, Box, Paper, Typography, ThemeProvider, Button} from '@mui/material';
import WorkHistory from './WorkHistory.jsx';
import Education from './Education.jsx'
import TechStack from './TechStack.jsx'
import About from './About.jsx'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React, { useState } from 'react';


function AboutList({theme}) {
  const [active, setActive] = useState("About")

  function handleClick(activeSection) {
    setActive(activeSection)

  }


  return (
    <div className="section aboutMeImage">
    <ThemeProvider theme={theme}>
      <Container>
        <Paper sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: ".75em"}}>
          <Box sx={{padding: "1em", width: "40%", maxHeight: "500px"}} className="profilePictureBox">
            <img src={require('./images/profilePic.jpg')} className="profilePicture"/>
          </Box>
          <Box className="profileText" sx={{position: "relative", display: "flex", flexDirection: "column", height: "100%", minHeight: "500px"}}>
            <Box sx={{display: "flex", width: "100%", justifyContent: "space-between"}}>
              <Button className={active === "About" ? 'test': null} sx={{width: "24%"}} variant="outlined" onClick={(()=> handleClick("About"))}>Stuff about me</Button>
              <Button varient={active === "TechStack" ? 'outlined': null} sx={{width: "24%"}} variant="outlined" onClick={(()=> handleClick("TechStack"))}>Tech I use</Button>
              <Button className={active ? 'test': null} sx={{width: "24%"}} variant="outlined" onClick={(()=> handleClick("WorkHistory"))}>Where I worked</Button>
              <Button className={active ? 'test': null} sx={{width: "24%"}} variant="outlined" onClick={(()=> handleClick("Education"))}>Where I learned</Button>
            </Box>
            <Box sx={{minHeight: "350px", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: "15px"}}>
              {active === "About" && <About theme={theme}></About>}
              {active === "TechStack" && <TechStack theme={theme}></TechStack>}
              {active === "WorkHistory" && <WorkHistory theme={theme}></WorkHistory>}
              {active === "Education" && <Education theme={theme}></Education>}
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>

  )
}


export default AboutList;
