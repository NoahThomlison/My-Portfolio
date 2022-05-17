import { Box, Typography, ThemeProvider} from '@mui/material';

function TechStack({theme}) {
  return (
    <ThemeProvider theme={theme}>
        <Box>
          <Box className="underline" >
            <Typography variant="h6" className="aboutHeaders">Languages</Typography>
          </Box>
          <Box className="aboutContent">
            <Typography>JavaScript, CSS, HTML, Ruby, C, Python</Typography>
          </Box>
        </Box>

        <Box sx={{paddingTop: "20px"}}>
          <Box className="underline" >
            <Typography variant="h6" className="aboutHeaders">Frameworks, Libraries, Enviroments</Typography>
          </Box>
          <Box className="aboutContent">
            <Typography>NodeJS, React, Ajax, Express, EJS, Jquery, ActiveRecord, SASS, Ruby on Rails, Bootstrap, Material UI</Typography>
          </Box>
        </Box>
        
        <Box sx={{paddingTop: "20px"}}>
          <Box className="underline" >
            <Typography variant="h6" className="aboutHeaders">Testing</Typography>
          </Box>         
          <Box className="aboutContent">
            <Typography>RSpec, Cypress, Storybook, Jest, Mocha, Chai</Typography>
          </Box>
        </Box>

        <Box sx={{paddingTop: "20px"}}>
          <Box className="underline" >
            <Typography variant="h6" className="aboutHeaders">Databases</Typography>
          </Box>
          <Box className="aboutContent">
            <Typography>PostgreSQL, SQL, MongoDB</Typography>
          </Box>
        </Box>
    </ThemeProvider>
  )
}


export default TechStack;
