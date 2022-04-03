import {Container, Box, Paper, Typography, ThemeProvider} from '@mui/material';

function TechStack({theme}) {
  return (
    <div className="section aboutMeImage">
    <ThemeProvider theme={theme}>
      <Container>
        <Paper sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: ".75em"}}>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>

  )
}


export default TechStack;
