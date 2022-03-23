import TypeAnimation from 'react-type-animation';
import {Container, Box, Paper, Typography} from '@mui/material';

const Intro = () => {
  return (
    <Container>
      {/* <Paper sx={{padding: "20px", top: "0px"}}> */}
        <Typography variant="h1">
          Hi, Im Noah.
        </Typography>
        <Typography variant="h2">
          Full Stack Web Developer. 
        </Typography>
        <Typography variant="h4">
          JS, React, Python, Ruby.        
        </Typography>
      {/* </Paper> */}
    </Container>
  );
};

export default Intro;
