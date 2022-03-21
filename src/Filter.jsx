import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper, IconButton, SvgIcon, FontAwesomeSvgIcon, Icon, ButtonGroup } from '@mui/material';


function Filter(props) {

  const {projects} = props
  let stackList = ["React", "JS", "Python", "Ruby", "Rails", "Mongo", "Express", "Node.js", "Bootstrap", "MUI", "APIs", "SASS"];

  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        {stackList.map((stack)=> {
          return(
            <Button>{stack}</Button>
          )
        })}
      </ButtonGroup>
    </Box>
  )
}

export default Filter;