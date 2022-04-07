import {Container, Box, Paper, Typography, ThemeProvider} from '@mui/material';

function Education({theme}) {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box className="underline">
          <Typography variant="h6">Motorola Solutions</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
          <Box>
            <Typography>Mechanical Design Engineer</Typography>
            <Typography>Vancouver, British Columbia</Typography>
          </Box>
          <Typography>May 2021 to Current</Typography>
        </Box>
        <ul>
          <li><Typography>Work in a multi-disciplined team to develop commercial high-end security cameras</Typography></li>
          <li><Typography>Coordinate with international suppliers to source and plan project timelines</Typography></li>
        </ul>
      </Box>

      <Box>
        <Box className="underline">
          <Typography variant="h6">WestMill Industries</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
          <Box>
            <Typography>Mechanical Design Engineer</Typography>
            <Typography>Abbotsford, British Columbia</Typography>
          </Box>
          <Typography>May 2019​ to May 2021​</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
        <ul>
          <li><Typography>Design large scale-forestry equipment and machinery</Typography></li>
          <li><Typography>Creation of project plans with project managers</Typography></li>
        </ul>
        </Box> 
      </Box>

      <Box>
        <Box className="underline">
          <Typography variant="h6">Modular Driven Technologies</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
          <Box>
            <Typography>Design Engineer</Typography>
            <Typography>Chilliwack, British Columbia</Typography>
          </Box>
          <Typography>May 2016​ to May 2019​</Typography>
        </Box>
        <ul>
          <li><Typography>Design, sourcing and testing of consumer sporting goods</Typography></li>
          <li><Typography>Manage projects for new products, lead design meetings and product kickoff meetings</Typography></li>
        </ul>
      </Box>
    </ThemeProvider>
  )
}

export default Education;

