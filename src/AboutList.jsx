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
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <Container>
              <Button onClick={(()=> setActive("About"))}>Stuff about me</Button>
              <Button onClick={(()=> setActive("TechStack"))}>Tech I use</Button>
              <Button onClick={(()=> setActive("WorkHistory"))}>Where I worked</Button>
              <Button onClick={(()=> setActive("Education"))}>Where I learned</Button>
            </Container>
            {active === "About" && <About></About>}
            {active === "TechStack" && <TechStack></TechStack>}
            {active === "WorkHistory" && <WorkHistory></WorkHistory>}
            {active === "AbEducationout" && <Education></Education>}
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>

  )
}


export default AboutList;
