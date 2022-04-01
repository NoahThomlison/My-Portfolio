import {Typography, Box, ThemeProvider} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState } from 'react';
import fullpage_api from "@fullpage/react-fullpage";

function ProjectList({projects, theme}) {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);

  function accordianClick(state){
    setExpanded(!expanded)
  }

  function buttonClick(e, stack){
    e.stopPropagation() 
    setFilter(stack)      
    setExpanded(!expanded)
    fullpage_api.reBuid()
  }

  const projectsToRender = projects.filter(function (project) {
    return((project.techStack.includes(filter) || filter === "All"))
  })

  return (
    <ThemeProvider theme={theme}>
      <Filter buttonClick={buttonClick} accordianClick={accordianClick} expanded={expanded} filter={filter}></Filter>
        <div className="section aboutMeImage">
          <Box sx={{ display: "Flex", flexWrap: "wrap", padding: "100px, 80px, 0px, 10px", paddingTop: "70px", justifyContent: "center", height: "90%"}}>
            {projectsToRender.length === 0 &&
              <Box sx={{paddingTop: "50px"}}>
                <Typography variant="h5">Nothing Yet.</Typography>
              </Box>}
            {projectsToRender.length > 0 &&
              projectsToRender.map((project, index) => {
                return(<Project project={project} index={index} image={project.image}></Project>)
              })
            }
          </Box>
        </div>
    </ThemeProvider>
  )
}

export default ProjectList;