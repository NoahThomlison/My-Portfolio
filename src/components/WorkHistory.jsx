import { Box, Typography } from "@mui/material";
import useWindowDimensions from "../helpers/useWindowDimensions";

function WorkHistory({  experience }) {
  const { width } = useWindowDimensions();
  return (
    <Box>
      <Box className="underline">
        <Typography variant="h6" className="aboutHeaders">
          {experience.companyName}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        className="aboutContent"
      >
        <Box>
          <Typography className="aboutTextPadding">
            {experience.jobTitle}
          </Typography>
          <Typography className="aboutTextPadding">
            {experience.location}
          </Typography>
        </Box>
        <Typography>{experience.date}</Typography>
      </Box>
      <ul>
        {experience.descriptions.map((description, index) => {
          if (index > 0) {
            return width > 768 ? (
              <li>
                <Typography className="aboutTextPadding">
                  {description}
                </Typography>
              </li>
            ) : null;
          } else {
            return (
              <li>
                <Typography className="aboutTextPadding">
                  {description}
                </Typography>
              </li>
            );
          }
        })}
      </ul>
    </Box>
  );
}

export default WorkHistory;
