import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState } from 'react';

function ProjectList({projects}) {
  console.log(projects)
  const [filter, setFilter] = useState("All");

  const projectsToRender = projects.filter(function (project) {
    return((project.techStack.includes(filter) || filter === "All"))
  })

  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "75px"}}>
      <Filter sx={{justifySelf: "flex-start"}}projects={projects} setFilter={setFilter}></Filter>
      <Box sx={{display: "Flex", flexWrap: "wrap", padding: "100px, 10px, 0px, 10px", justifyContent: "center", height: "90%"}}>
      {projectsToRender.map((project) => {
        return(<Project project={project}></Project>)
      })}
      </Box>
    </Box>
  )
}

export default ProjectList;