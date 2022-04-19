import { Box, Typography, ThemeProvider} from '@mui/material';
import useWindowDimensions from './useWindowDimensions';


function Education({theme}) {
  const { height, width } = useWindowDimensions();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">Motorola Solutions</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
          <Box>
            <Typography>Mechanical Design Engineer</Typography>
            <Typography>Vancouver, British Columbia</Typography>
          </Box>
          <Typography>May 2021 to Current</Typography>
        </Box>
        <ul>
          <li><Typography>Work in a multi-disciplined team to develop commercial high-end security cameras</Typography></li>
          {width > 768 ? <li><Typography>Coordinate with international suppliers to source and plan project timelines</Typography></li> : ""}
        </ul>
      </Box>

      <Box>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">WestMill Industries</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
          <Box>
            <Typography>Mechanical Design Engineer</Typography>
            <Typography>Abbotsford, British Columbia</Typography>
          </Box>
          <Typography>May 2019​ to May 2021​</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
        <ul>
          <li><Typography>Design large scale-forestry equipment and machinery</Typography></li>
          {width > 768 ? <li><Typography>Creation of project plans with project managers</Typography></li> : ""}      
        </ul>
        </Box> 
      </Box>

      <Box>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">Modular Driven Technologies</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
          <Box>
            <Typography>Design Engineer</Typography>
            <Typography>Chilliwack, British Columbia</Typography>
          </Box>
          <Typography>May 2016​ to May 2019​</Typography>
        </Box>
        <ul>
          <li><Typography>Design, sourcing and testing of consumer sporting goods</Typography></li>
          {width > 768 ? <li><Typography>Manage projects for new products, lead design meetings and product kickoff meetings</Typography></li> : ""}          
        </ul>
      </Box>
    </ThemeProvider>
  )
}

export default Education;

