import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState } from 'react';

function ProjectList({projects}) {
  const [filter, setFilter] = useState("All");
  const projectsToRender = projects.filter(function (project) {
    return((project.techStack.includes(filter) || filter === "All"))
  })

  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "10px"}}>
      <Filter sx={{justifySelf: "flex-start"}} projects={projects} setFilter={setFilter}></Filter>
      <Box sx={{display: "Flex", flexWrap: "wrap", padding: "100px, 10px, 0px, 10px", justifyContent: "center", height: "90%"}}>
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

    </Box>
  )
}

export default ProjectList;