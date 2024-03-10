import { Container, Box, Paper, ThemeProvider, Button } from "@mui/material";
import WorkHistory from "./WorkHistories.jsx";
import Education from "./Education.jsx";
import TechStack from "./TechStack.jsx";
import About from "./About.jsx";
import React, { useState } from "react";

function AboutList({ theme }) {
  const [active, setActive] = useState("About");

  function handleClick(activeSection) {
    setActive(activeSection);
  }

  return (
    <div className="section aboutMeImage">
      <ThemeProvider theme={theme}>
        <Container>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: ".75em",
            }}
          >
            <Box
              sx={{ padding: "1em", width: "40%", maxHeight: "500px" }}
              className="profilePictureBox"
            >
              <img
                alt="not found"
                src={require("../images/profilePic.jpg")}
                className="profilePicture"
              />
            </Box>
            <Box className="profileText">
              <Box className="buttons">
                <Button
                  className="aboutButton"
                  variant={active === "About" ? "contained" : "outlined"}
                  onClick={() => handleClick("About")}
                >
                  Profile
                </Button>
                <Button
                  className="aboutButton"
                  variant={active === "TechStack" ? "contained" : "outlined"}
                  onClick={() => handleClick("TechStack")}
                >
                  Tech Experience
                </Button>
                <Button
                  className="aboutButton"
                  variant={active === "WorkHistory" ? "contained" : "outlined"}
                  onClick={() => handleClick("WorkHistory")}
                >
                  Work History
                </Button>
                <Button
                  className="aboutButton"
                  variant={active === "Education" ? "contained" : "outlined"}
                  onClick={() => handleClick("Education")}
                >
                  Education
                </Button>
              </Box>
              <Box
                sx={{
                  minHeight: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  paddingTop: "15px",
                }}
              >
                {active === "About" && <About theme={theme}></About>}
                {active === "TechStack" && (
                  <TechStack theme={theme}></TechStack>
                )}
                {active === "WorkHistory" && (
                  <WorkHistory theme={theme}></WorkHistory>
                )}
                {active === "Education" && (
                  <Education theme={theme}></Education>
                )}
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default AboutList;
