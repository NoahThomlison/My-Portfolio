import {Typography, Container, Box, ThemeProvider, Button, IconButton, Grid} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useWindowDimensions from './useWindowDimensions';

function ProjectList({projects, theme}) {
  const [filter, setFilter] = useState("React");
  const [expanded, setExpanded] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0)
  const { height, width } = useWindowDimensions();

  let projectPerSlide = 6
  if(width < 1200){
    projectPerSlide = 4;
  }
  if(width < 900){
    projectPerSlide = 2;
  }

  let projectSlides = []
  function accordianClick(state){
    setExpanded(!expanded)
  }

  function buttonClick(e, stack){
    e.stopPropagation()
    setFilter(stack)
    setExpanded(!expanded)
  }

  useEffect(() => {
    setSlideIndex(0);
  },[filter]);


  function filterAndSplitProjects(filter, index){
    const projectsToRender = projects.filter(function (project) {
      return((
        project.techStack.includes(filter) || filter === "All"
        ))
    })

    const slides = []
    for (let i = 0; i < projectsToRender.length; i += projectPerSlide) {
        const slideSet = projectsToRender.slice(i, i + projectPerSlide);
        slides.push(slideSet)
    }
    console.log(slides)
    return(slides)
  }
  projectSlides = filterAndSplitProjects(filter, slideIndex)
  console.log(projectSlides)
  console.log(`width: ${width} ~ height: ${height}`)
  console.log(`projectPerSlide: ${projectPerSlide}`)

  return (
    <ThemeProvider theme={theme}>
        <div className="section aboutMeImage work">
          <Filter buttonClick={buttonClick} accordianClick={accordianClick} expanded={expanded} filter={filter}></Filter>
          <Box className="projectAndButtonContainer">
            {projectSlides[slideIndex-1] ? 
            <span className="buttonContainerGo">
              <IconButton className="arrow" color="primary" onClick={() => setSlideIndex(slideIndex-1)}><ArrowBackIosNewIcon/></IconButton>
            </span>
            :
            <span className="buttonContainerNoGo">
              <IconButton className="arrow" disabled color="primary"><ArrowBackIosNewIcon/></IconButton>
            </span>
            }
            <Container className="projectListContainer" sx={{marginLeft: "0px", marginRight:"0px"}}>
              <Grid container spacing={2} >
                {projectSlides[slideIndex].map((project)=>{
                  return(
                    <Grid item lg={4} md={6} sm={12} sx={{width:"100%"}}>
                      <Project width={width} project={project} image={project.image}></Project>
                    </Grid>
                  )
                })}
              </Grid>
            </Container>
            {projectSlides[slideIndex+1] ? 
            <span className="buttonContainerGo">
              <IconButton className="arrow" color="primary" onClick={() => setSlideIndex(slideIndex+1)}><ArrowForwardIosIcon/></IconButton>
            </span>
            :
            <span className="buttonContainerNoGo">
              <IconButton className="arrow" color="primary" disabled ><ArrowForwardIosIcon/></IconButton>
            </span>

            }
        </Box>
        </div>
    </ThemeProvider>
  )
}

export default ProjectList;