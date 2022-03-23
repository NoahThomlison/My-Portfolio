import TypeAnimation from 'react-type-animation';
import {Container, Box, Paper, Typography} from '@mui/material';

const Intro = () => {
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
    </Container>
  );
};

export default Intro;
