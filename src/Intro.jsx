import TypeAnimation from 'react-type-animation';
import {Container, Box, Paper, Typography, Button, ButtonGroup} from '@mui/material';
// import {ReactFullpage, fullpageApi} from '@fullpage/react-fullpage';

const Intro = ({fullpageApi}) => {
  return (
    <Container sx={{position: "relative", bottom: "150px", color:"#FFFFFF"}}>
        <Typography variant="h1">
          Hi, Im Noah.
        </Typography>
        <Typography variant="h2">
          Full Stack Web Developer. 
        </Typography>
        <Typography variant="h4">
          JS, React, Python, Ruby.        
        </Typography>
        <Box sx={{display:"flex", marginTop: "15px"}}>
          <Button variant="outlined" onClick={() => fullpageApi.moveTo(2)} sx={{marginRight: "20px", borderColor:"#FFFFFF"}}>About me</Button>
          <Button variant="outlined" onClick={() => fullpageApi.moveTo(3)} sx={{borderColor:"#FFFFFF"}}>My Work</Button>
          {/* <Button variant="outlined" onClick={() => fullpageApi.moveTo(4)} sx={{marginLeft: "20px", borderColor:"#FFFFFF"}}>Contact me</Button> */}
        </Box>
    </Container>
  );
};

export default Intro;
