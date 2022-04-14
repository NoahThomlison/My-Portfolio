import {Typography, Box, ThemeProvider, Button} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState, useEffect } from 'react';

function ProjectList({projects, theme}) {
  const [filter, setFilter] = useState("React");
  const [expanded, setExpanded] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0)
  
  let projectSlides = []
  function accordianClick(state){
    setExpanded(!expanded)
  }

  function buttonClick(e, stack){
    e.stopPropagation()
    setFilter(stack)
    setExpanded(!expanded)
  }

  function filterAndSplitProjects(filter, index){
    const projectsToRender = projects.filter(function (project) {
      return((
        project.techStack.includes(filter) || filter === "All"
        ))
    })

    const slides = []
    const projectPerSlide = 4;
    for (let i = 0; i < projectsToRender.length; i += projectPerSlide) {
        const slideSet = projectsToRender.slice(i, i + projectPerSlide);
        slides.push(slideSet)
    }
    console.log(slides)
    let slideSet = slides.slice(index, index+4)
    return(slideSet)
  }
  projectSlides = filterAndSplitProjects(filter, slideIndex)
  console.log(projectSlides)


  return (
    <ThemeProvider theme={theme}>
      <Filter buttonClick={buttonClick} accordianClick={accordianClick} expanded={expanded} filter={filter}></Filter>
        <div className="section aboutMeImage work">
          <Box sx={{ display: "Flex", flexWrap: "wrap", justifyContent: "center", height: "100%", alignContent: "flex-start"}}>
          <Button onClick={() => setSlideIndex(0)}>Previous</Button>
          <div>
            {projectSlides[0].map((project)=>{
              return(
                <Project project={project} image={project.image}></Project>
              )
                })}
          </div>
          <Button onClick={() => setSlideIndex(1)}>Next</Button>
          </Box>
        </div>
    </ThemeProvider>
  )
}

export default ProjectList;