import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper, ThemeProvider} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState } from 'react';

function ProjectList({projects, theme}) {
  const [filter, setFilter] = useState("All");
  const projectsToRender = projects.filter(function (project) {
    return((project.techStack.includes(filter) || filter === "All"))
  })

  return (
    <ThemeProvider theme={theme}>
      <Filter projects={projects} setFilter={setFilter}></Filter>
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