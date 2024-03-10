import { Box, Typography, ThemeProvider } from "@mui/material";
import useWindowDimensions from "../helpers/useWindowDimensions";
import WorkHistory from "./WorkHistory";

function WorkHistories({ theme }) {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={theme}>
      {workExperiences.map((experience) => {
        return <WorkHistory experience={experience}></WorkHistory>;
      })}
    </ThemeProvider>
  );
}

export default WorkHistories;

const workExperiences = [
  {
    companyName: "Commerce7",
    jobTitle: "Software Developer",
    location: "Vancouver, British Columbia",
    date: "September 2022 - Current",
    descriptions: [
      "Work in the Product Team to create new features to improve the product",
      "Proficient in React.js and its ecosystem, including Redux for state management.",
      " Developed modular and reusable components following best practices, enhancing maintainability and scalability.",
      "Integrated RESTful APIs and third-party libraries into React applications, ensuring seamless data flow.",
    ],
  },
  {
    companyName: "Big Bear Software Inc",
    jobTitle: "Junior Developer",
    location: "Kelowna, British Columbia",
    date: "May 2021 - July 2022",
    descriptions: [
      "Worked in a small team of developers to aid in the creation of a financial management application",
      "Developed frontend components using Angular to add new features and improve functionality"
    ],
  },
  {
    companyName: "Motorola Solutions",
    jobTitle: "Mechanical Design Engineer",
    date: "May 2021 - July 2022",
    descriptions: [
    ],
  },
  {
    companyName: "Westmill Industries",
    jobTitle: "Mechanical Design Engineer",
    date: "May 2019 - May 2021",
    descriptions: [
    ],
  },
  {
    companyName: "Modular Driven Technologies (MDT)",
    jobTitle: "Design Engineer",
    date: "May 2016 - May 2019",
    descriptions: [
    ],
  },
];
