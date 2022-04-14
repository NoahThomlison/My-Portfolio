import {Typography, Box, ThemeProvider} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState, useEffect } from 'react';

function ProjectList({projects, theme}) {
  const [filter, setFilter] = useState("React");
  const [expanded, setExpanded] = useState(false);
  function accordianClick(state){
    setExpanded(!expanded)
  }
  
    useEffect(() => {
    console.log(window.fullpage_api.getActiveSection())
    window.fullpage_api.reBuild()
    // window.fullpage_api.moveSectionUp();

  }, [filter, expanded]);

    function buttonClick(e, stack){
    e.stopPropagation()
    setFilter(stack)
    setExpanded(!expanded)
  }


  const projectsToRender = projects.filter(function (project) {
    return((project.techStack.includes(filter) || filter === "All"))
  })

  return (
    <ThemeProvider theme={theme}>
      <Filter buttonClick={buttonClick} accordianClick={accordianClick} expanded={expanded} filter={filter}></Filter>
        <div className="section aboutMeImage work">
          <Box sx={{ display: "Flex", flexWrap: "wrap", justifyContent: "center", height: "100%", alignContent: "flex-start"}}>
            {projectsToRender.length === 0 &&
              <Box sx={{paddingTop: "50px"}}>
                <Typography variant="h5">Nothing Yet.</Typography>
              </Box>}
            {projectsToRender.length > 0 &&
              projectsToRender.map((project, index) => {
                return(<Project key={projectsToRender.indexOf(project)} project={project} index={index} image={project.image}></Project>)
              })
            }
          </Box>
        </div>
    </ThemeProvider>
  )
}

export default ProjectList;