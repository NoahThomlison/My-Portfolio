import {Container, Typography, Button, Box, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Filter({buttonClick, accordianClick, expanded, filter}) {
  // let stackList = ["Featured", "All", "React", "JS", "Python", "Ruby", "Rails", "MongoDB", "Express", "Node.js", "Bootstrap", "MUI", "API", "SASS"];
  let stackList = ["Featured", "React", "JS", "Python", "Ruby", "Rails", "MongoDB", "Express", "Node.js", "Bootstrap", "MUI", "API", "SASS"];

  
  return (
    <Container className="filterBar" sx={{position: "fixed", zIndex: "10", paddingTop: "20px", left: "50%", transform: "translate(-50%, 0);"}}>
      <Accordion expanded={expanded} onClick={()=> accordianClick(expanded)}>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h6">{filter}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", padding: "5px"}} className="buttonAccordian">
              {stackList.map((stack)=> {
                return(
                  <Button key={stack} onClick={(e)=> buttonClick(e, stack, expanded)} sx={{margin:"2px"}} variant="contained">{stack}</Button>
                )})}
            </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default Filter;
