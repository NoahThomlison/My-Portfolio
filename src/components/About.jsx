import { Box, Typography, ThemeProvider } from "@mui/material";

function About({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box className="underline">
          <Typography className="aboutHeaders" variant="h6">
            About me
          </Typography>
        </Box>
        <Box className="aboutContent">
          <Typography>
            I'm passionate software developer currently working to help build
            the online experience at{" "}
            <a href="https://commerce7.com/">Commerce7</a>.
          </Typography>
          <br></br>
          <Typography>
            With a foundation in mechanical engineering, my journey into the
            tech world began with a degree that fueled my curiosity for
            problem-solving. I decided to switch career paths and earned a
            diploma in web development, merging the precision of engineering
            with the creativity of coding.
          </Typography>
          <br></br>
          <Typography>
            My professional adventure spans three years in software development,
            and five years in the mechanical engineering. During my time in
            Mechanical Engineering, I have designed consumer goods and led and
            managed projects.
          </Typography>
          <br></br>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default About;
