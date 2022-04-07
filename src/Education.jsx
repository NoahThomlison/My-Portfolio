import { Box, Typography, ThemeProvider} from '@mui/material';

function Education({theme}) {
  return (
    <ThemeProvider theme={theme}>
      <Box >
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">Lighthouse Labs</Typography>
        </Box>
                {/* <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent"> */}

        <Box className="aboutContent" sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography sx={{paddingLeft: "5px"}}>Diploma Full Stack Web Development</Typography>
          <Typography>Mar. 2021​ to Feb. 2022​</Typography>
        </Box>
      </Box>

      <Box sx={{paddingTop: "20px"}}>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">British Columbia Institute of Technology</Typography>
        </Box>
        <Box className="aboutContent"sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography sx={{paddingLeft: "5px"}}>Bachelor's Degree Mechanical Engineering</Typography>
          <Typography>Sept. 2014​ to May. 2016</Typography>
        </Box>
      </Box>

      <Box sx={{paddingTop: "20px"}}>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">British Columbia Institute of Technology</Typography>
        </Box>
        <Box className="aboutContent" sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography sx={{paddingLeft: "5px"}}>Diploma Mechanical Engineer</Typography>
          <Typography>Sept. 2012​ to May. 2014​</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Education;
