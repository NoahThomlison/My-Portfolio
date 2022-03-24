import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper, IconButton, SvgIcon, FontAwesomeSvgIcon, Icon, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';

function Filter(props) {

  const {setFilter} = props
  let stackList = ["React", "JS", "Python", "Ruby", "Rails", "MongoDB", "Express", "Node.js", "Bootstrap", "MUI", "API", "SASS"];

  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        {stackList.map((stack)=> {
          return(
            <Button onClick={()=> setFilter(stack)} >{stack}</Button>
          )
        })}
      </ButtonGroup>
    </Box>
  )
}

export default Filter;