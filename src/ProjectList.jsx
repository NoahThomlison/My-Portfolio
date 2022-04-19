import {Typography, Container, Box, ThemeProvider, Button, IconButton } from '@mui/material';
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
  if(width < 768){
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
            <IconButton className="arrow" color="primary" onClick={() => setSlideIndex(slideIndex-1)}><ArrowBackIosNewIcon/></IconButton>
            :
            <IconButton className="arrow" disabled color="primary"><ArrowBackIosNewIcon/></IconButton>
            }
            <Box className="projectListContainer">
              {projectSlides[slideIndex].map((project)=>{
                return(
                  <Project width={width} project={project} image={project.image}></Project>
                )
                  })}
            </Box>
            {projectSlides[slideIndex+1] ? 
            <IconButton className="arrow" color="primary" onClick={() => setSlideIndex(slideIndex+1)}><ArrowForwardIosIcon/></IconButton>
            :
            <IconButton className="arrow" color="primary" disabled ><ArrowForwardIosIcon/></IconButton>
            }
        </Box>
        </div>
    </ThemeProvider>
  )
}

export default ProjectList;