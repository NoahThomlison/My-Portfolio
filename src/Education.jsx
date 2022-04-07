import {Container, Box, Paper, Typography, ThemeProvider} from '@mui/material';

function Education({theme}) {
  return (
    <ThemeProvider theme={theme}>
          <Box className="underline">
            <Typography variant="h6" sx={{paddingLeft: "5px"}}>Lighthouse Labs</Typography>
            <Box sx={{display: "flex", width: "100%", justifyContent: "space-between"}}>
              <Typography variant="" sx={{paddingLeft: "5px"}}>Diploma Full Stack Web Development</Typography>
              <Typography>Mar. 2021​ to Feb. 2022​</Typography>
            </Box>
          </Box>

          <Box className="underline">
            <Typography variant="h6" sx={{paddingLeft: "5px"}}>British Columbia Institute of Technology</Typography>
            <Box sx={{display: "flex", width: "100%", justifyContent: "space-between"}}>
              <Typography variant="" sx={{paddingLeft: "5px"}}>Bachelor's Degree Mechanical Engineering</Typography>
              <Typography>Sept. 2014​ to May. 2016</Typography>
            </Box>
          </Box>

          <Box className="underline">
            <Typography variant="h6" sx={{paddingLeft: "5px"}}>British Columbia Institute of Technology</Typography>
            <Box sx={{display: "flex", width: "100%", justifyContent: "space-between"}}>
              <Typography variant="" sx={{paddingLeft: "5px"}}>Diploma Mechanical Engineer</Typography>
              <Typography>Sept. 2012​ to May. 2014​</Typography>
            </Box>
          </Box>
    </ThemeProvider>
  )
}


export default Education;
