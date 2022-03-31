import {Container, Box, Paper, Typography, ThemeProvider} from '@mui/material';

function About({theme}) {
  return (
    <div className="section aboutMeImage">
    <ThemeProvider theme={theme}>
      <Container>
        <Paper sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: ".75em"}}>
          <Box sx={{padding: "1em"}} className="profilePictureBox">
            <img src={require('./images/profilePic.jpg')} className="profilePicture"/>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <Box>
              <Box className="underline" >
              <Typography variant="h5" sx={{paddingLeft: "5px"}}>About me</Typography>
              </Box>
              <Box sx={{border: "black, 1px, solid", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
              <Typography>
                  I am a recent graduate of a six-month-long boot camp at Lighthouse Labs, where I obtained a diploma in Web Development. I also have a Bachelor's Degree in  Mechanical Engineering from the British Columbia Institute of Technology.
              </Typography>
              <br></br>
              <Typography>
                  Before attending Lighthouse Labs I have worked as a Mechanical Design Engineer for 5 years and have worked in various industries designing consumer goods. This includes sporting goods, motorcycle accessories and commercial cameras. I decided to make a pivot from Mechanical Engineering to Web Development as I    found the speed and ability to rapidly iterate and design when doing coding is I greatly enjoy.
              </Typography>          
              <br></br>
              <Typography>
                  In my free time, I am continuing my studies by learning Python and Django, practicing to hone my skills further in React and refactoring my midterm project,  Smart-To-Do list, to add new functionality. 
              </Typography>
              </Box>
            </Box>
            <Box sx={{width: "100%", paddingTop: "30px"}}>
              <Typography variant="h5" className="underline" sx={{paddingLeft: "5px"}}>Tech I use</Typography>
                <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
                <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/>
                <img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/>
                </Box>
              </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>

  )
}


export default About;
