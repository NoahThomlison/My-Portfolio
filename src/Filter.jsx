import { GifBoxOutlined } from '@mui/icons-material';
import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper, IconButton, SvgIcon, FontAwesomeSvgIcon, Icon, ButtonGroup, Accordion, Grid, FormControl, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Filter(props) {

  const {setFilter} = props
  let stackList = ["All", "React", "JS", "Python", "Ruby", "Rails", "MongoDB", "Express", "Node.js", "Bootstrap", "MUI", "API", "SASS"];

  return (
    <Container className="filterBar" sx={{top: "15px", position: "fixed", zIndex: "10", left: "50%", transform: "translate(-50%, 0);"}}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h6">Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* <ButtonGroup variant="contained" aria-label="outlined primary button group"> */}
            <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", padding: "5px"}} className="buttonAccordian">
              {stackList.map((stack)=> {
                return(
                  <Button onClick={()=> setFilter(stack)} sx={{margin:"2px"}} variant="contained">{stack}</Button>
                )})}
            </Box>
            {/* </ButtonGroup> */}
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default Filter;