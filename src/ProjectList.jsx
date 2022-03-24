import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState } from 'react';

function ProjectList(props) {
  const {projects} = props
  const [filter, setFilter] = useState();

  return (
    <Box>
      <Filter projects={projects} setFilter={setFilter}></Filter>
      <Project projects={projects} filter={filter}></Project>
    </Box>
  )
}

export default ProjectList;