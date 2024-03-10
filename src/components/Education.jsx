import { Box, Typography, ThemeProvider } from "@mui/material";
import useWindowDimensions from "../helpers/useWindowDimensions";

function Education({ theme }) {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box className="underline">
          <Typography variant="h6" className="aboutHeaders">
            Lighthouse Labs
          </Typography>
        </Box>
        <Box
          className="aboutContent"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography className="aboutTextPadding">Diploma</Typography>
            <Typography className="aboutTextPadding">
              Full Stack Web Development
            </Typography>
          </Box>
          <Typography>Mar. 2021​ - Feb. 2022​</Typography>
        </Box>
      </Box>

      <Box sx={{ paddingTop: "20px" }}>
        <Box className="underline">
          {width > 768 ? (
            <Typography variant="h6" className="aboutHeaders">
              British Columbia Institute of Technology
            </Typography>
          ) : (
            <Typography variant="h6" className="aboutHeaders">
              BCIT
            </Typography>
          )}
        </Box>
        <Box
          className="aboutContent"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography className="aboutTextPadding">
              Bachelor's Degree
            </Typography>
            <Typography className="aboutTextPadding">
              Mechanical Engineering
            </Typography>
          </Box>
          <Typography>Sept. 2014​ - May. 2016</Typography>
        </Box>
      </Box>

      <Box sx={{ paddingTop: "20px" }}>
        <Box className="underline">
          {width > 768 ? (
            <Typography variant="h6" className="aboutHeaders">
              British Columbia Institute of Technology
            </Typography>
          ) : (
            <Typography variant="h6" className="aboutHeaders">
              BCIT
            </Typography>
          )}{" "}
        </Box>
        <Box
          className="aboutContent"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography className="aboutTextPadding">Diploma</Typography>
            <Typography className="aboutTextPadding">
              Mechanical Engineering
            </Typography>
          </Box>
          <Typography>Sept. 2012​ - May. 2014​</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Education;
