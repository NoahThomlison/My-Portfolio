import {Container, Box, Paper, Typography, ThemeProvider} from '@mui/material';

function TechStack({theme}) {
  return (
    <ThemeProvider theme={theme}>
      <Box className="flex-container" sx={{display: "flex", flexDirection: "column"}}>
      <Box sx={{flex: "1"}}>
        <Box className="underline" >
          <Typography variant="h5" sx={{paddingLeft: "5px"}}>Languages</Typography>
        </Box>
        <Box sx={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
        <Typography>JavaScript, CSS, HTML, Ruby, C, Python</Typography>
        </Box>
        </Box>


        <Box sx={{flex: "1"}}>

        <Box className="underline" >
          <Typography variant="h5" sx={{paddingLeft: "5px"}}>Frameworks, Libraries, Enviroments</Typography>
        </Box>
                <Box sx={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
                <Typography>NodeJS, React, Ajax, Express, EJS, Jquery, ActiveRecord, SASS, Ruby on Rails, Bootstrap, Material UI</Typography>
        </Box>
        </Box>
        <Box sx={{flex: "1"}}>

        <Box className="underline" >
          <Typography variant="h5" sx={{paddingLeft: "5px"}}>Testing</Typography>
        </Box>         
        <Box sx={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
        <Typography>RSpec, Cypress, Storybook, Jest, Mocha, Chai</Typography>
        </Box>
                </Box>

                <Box sx={{flex: "1"}}>

        <Box className="underline" >
          <Typography variant="h5" sx={{paddingLeft: "5px"}}>Databases</Typography>
        </Box>
        <Box sx={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
        <Typography>PostgreSQL, SQL, MongoDB</Typography>
        </Box>
        </Box>

      </Box>
    </ThemeProvider>
  )
}


export default TechStack;
