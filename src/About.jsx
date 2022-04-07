import {Container, Box, Paper, Typography, ThemeProvider} from '@mui/material';

function About({theme}) {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box className="underline" >
        <Typography variant="h6" sx={{paddingLeft: "5px"}}>About me</Typography>
        </Box>
        <Box sx={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
        <Typography>
          I am a recent graduate of a Web Development Diploma program at <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>. I also have a Bachelor's Degree Mechanical Engineering from the <a href="https://www.bcit.ca/programs/mechanical-engineering/">British Columbia Institute of Technology</a>.
        </Typography>
        <br></br>
        <Typography>
          Before attending Lighthouse Labs I have worked as a Mechanical Design Engineer for 5 years. Some projects I have been involved in include sporting goodmotorcycle accessories, machinery and commercial cameras. I decided to make a pivot from Mechanical Engineering to Web Development as I found the speed aability to rapidly iterate and design when doing coding is I greatly enjoy.
        </Typography>          
        <br></br>
        <Typography>
          In my free time, I am continuing my studies by learning Python and Django, practicing to hone my skills further in React and refactoring my midterm projectSmart-To-Do list, to add new functionality. 
        </Typography>
        </Box>
      </Box>
    </ThemeProvider>

  )
}


export default About;
