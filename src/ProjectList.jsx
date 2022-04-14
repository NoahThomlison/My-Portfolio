import {Typography, Box, ThemeProvider, Button} from '@mui/material';
import Filter from "./Filter"
import Project from "./Project"
import React, { useState, useEffect } from 'react';
import Slide from "./Slide"
function ProjectList({projects, theme}) {
  const [filter, setFilter] = useState("React");
  const [expanded, setExpanded] = useState(false);
  // const [projectSlides, setProjectSlides] = useState()
  // const [projectsToRender, setProjectsToRender] = useState(projects.slice(0, 4))
  function accordianClick(state){
    setExpanded(!expanded)
  }
  
  //   useEffect(() => {
  //   window.fullpage_api.destroy()
  //   window.fullpage_api.reBuild()
  // }, [filter, expanded]);

    function buttonClick(e, stack){
    window.fullpage_api.destroy("All")

    e.stopPropagation()
    setFilter(stack)
    setExpanded(!expanded)
  }


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
    const handleAddSection = () => {
      console.log("adding new section");
      this.setState((state, props) => {
        let fullpages = JSON.parse(JSON.stringify(state.fullpages));
        fullpages.push({
          text: "new section"
        });
        return {
          fullpages
        };
      });
    }


  return (
    <ThemeProvider theme={theme}>
      <Filter buttonClick={buttonClick} accordianClick={accordianClick} expanded={expanded} filter={filter}></Filter>
        <div className="section aboutMeImage work">
          <Box sx={{ display: "Flex", flexWrap: "wrap", justifyContent: "center", height: "100%", alignContent: "flex-start"}}>
            {slides.map((slide)=>{
              return(
              <div className="slide">
              {slide.map((project, index) => {
                return(
                  <Project key={projectsToRender.indexOf(project)} project={project} index={index} image={project.image}></Project>
                )
              })}
              </div>
              )
                })}
                
                                {/* // </div> */}

{/*                 
            // <div className="slide">
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // </div>
            // <div className="slide">
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // </div>
            // <div className="slide">
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // <Project project={slides[0][0]} index={slides[0][0]} image={slides[0][0].image}></Project>
            // </div> */}
{/*             
            {projectsToRender.length === 0 &&
              <Box sx={{paddingTop: "50px"}}>
                <Typography variant="h5">Nothing Yet.</Typography>
              </Box>}
              {slides.map((slideSet) => {
              return(
              <Slide slideSet={slideSet}></Slide>
              )
              })} */}
            {/* <div className="slide">
            {projectsToRender.length > 0 &&
              projectsToRender.map((project, index) => {
                return(
                  <div className="slide">

                <Project key={projectsToRender.indexOf(project)} project={project} index={index} image={project.image}></Project>
                </div>
                )
              })
            }
            </div> */}
          </Box>
          
        </div>
    </ThemeProvider>
  )
}

export default ProjectList;