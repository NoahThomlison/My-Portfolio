import { Box, Typography, ThemeProvider} from '@mui/material';
import useWindowDimensions from '../useWindowDimensions';


function Education({theme}) {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">Motorola Solutions</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
          <Box>
            <Typography className="aboutTextPadding">Mechanical Design Engineer</Typography>
            <Typography className="aboutTextPadding">Vancouver, British Columbia</Typography>
          </Box>
          <Typography>May 2021 - Current</Typography>
        </Box>
        <ul>
          <li><Typography className="aboutTextPadding">Work in a multi-disciplined team to develop commercial high-end security cameras</Typography></li>
          {width > 768 ? <li><Typography className="aboutTextPadding">Coordinate with international suppliers to source and plan project timelines</Typography></li> : ""}
        </ul>
      </Box>

      <Box>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">WestMill Industries</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
          <Box>
            <Typography className="aboutTextPadding">Mechanical Design Engineer</Typography>
            <Typography className="aboutTextPadding"> Abbotsford, British Columbia</Typography>
          </Box>
          <Typography>May 2019​ - May 2021​</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
        <ul>
          <li><Typography className="aboutTextPadding">Design large scale-forestry equipment and machinery</Typography></li>
          {width > 768 ? <li><Typography className="aboutTextPadding">Creation of project plans with project managers</Typography></li> : ""}      
        </ul>
        </Box> 
      </Box>

      <Box>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">Modular Driven Technologies</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}} className="aboutContent">
          <Box>
            <Typography className="aboutTextPadding">Design Engineer</Typography>
            <Typography className="aboutTextPadding">Chilliwack, British Columbia</Typography>
          </Box>
          <Typography>May 2016​ - May 2019​</Typography>
        </Box>
        <ul>
          <li><Typography className="aboutTextPadding">Design, sourcing and testing of consumer sporting goods</Typography></li>
          {width > 768 ? <li><Typography className="aboutTextPadding">Manage projects for new products, lead design meetings and product kickoff meetings</Typography></li> : ""}          
        </ul>
      </Box>
    </ThemeProvider>
  )
}

export default Education;

