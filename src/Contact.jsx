import {Container, Box, Paper, ThemeProvider, Button, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';

function Contact({theme}) {

  const submitForm = (e) => {
    e.preventDefault()

  }
  return (
    <div className="section aboutMeImage">
      <ThemeProvider theme={theme}>
        <Container sx={{}}>
          <Paper sx={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", padding: ".75em", minHeight: "500px"}}>
          <Box className="underline" sx={{width:"100%", display:"flex", justifyContent: "center"}} >
            <Typography variant="h6">Contact</Typography>
          </Box>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <TextField sx={{minWidth: "90%"}} label="Name" type="padssword"/> 
              <TextField sx={{minWidth: "90%"}} label="Email" type="pasdssword"/> 
              <TextField sx={{minWidth: "90%"}} label="Message" multiline rows={4}/>
              <Button type="submit" onClick={(e) => submitForm(e)}sx={{minWidth: "25%"}} variant="outlined">Submit</Button> 
            </form>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Contact;