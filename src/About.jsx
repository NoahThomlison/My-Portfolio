import {Container, Box, Paper, Typography} from '@mui/material';

function About() {
  return (
    <Container>
      <Paper sx={{padding: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box sx={{padding: "10px"}}>
          <img src={require('./images/profilePic.jpg')} className="profilePicture"/>
        </Box>
        <Box  sx={{padding: "10px"}}>
          <Typography variant="h4">About me</Typography>
          <Typography>
              I am a recent graduate of a six-month-long boot camp at Lighthouse Labs, where I obtained a diploma in Web Development. I also have a Bachelor's Degree in  Mechanical Engineering from the British Columbia Institute of Technology.
          </Typography>
          <br></br>
          <Typography>
              At Lighthouse Labs, I gained experience with various technologies and frameworks including NodeJS, APIs and React. Lighthouse Labs has also taught me testing     frameworks and libraries such as Cypress, Storybook and Jest.
          </Typography>
          <br></br>
          <Typography>
              Before attending Lighthouse Labs I have worked as a Mechanical Design Engineer for 5 years and have worked in various industries designing consumer goods. This   includes sporting goods, motorcycle accessories and commercial cameras. I decided to make a pivot from Mechanical Engineering to Web Development as I have found the speed and ability to rapidly iterate and design when doing coding is something I greatly enjoy.
          </Typography>          
          <br></br>
          <Typography>
              In my free time, I am continuing my studies by learning Python and Django, practicing to hone my skills further in React and refactoring my midterm project,    Smart-To-Do list, to add new functionality.
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}


export default About;
