import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper} from '@mui/material';

function Project(props) {
  const {projects, filter} = props
  
  return (
    <Box sx={{display: "Flex", flexWrap: "wrap", padding: "100px, 10px, 0px, 10px", justifyContent: "center"}}>
      {projects.map((project) => {
        if (project.techStack.includes(filter) || filter === ""){
        return(
          <Card sx={{ maxWidth: 300, minWidth: 200, margin: "10px", height: "300px" }}>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              {project.title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
              {project.description}
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
              Stack: {project.techStack}
              </Typography>
            </CardContent>
            <Box sx={{display:"flex", justifyContent: "center", bottom: "0px", position:"relative"}}>
            <CardActions>
              <Button size="small">More Info</Button>
            </CardActions>
            <CardActions>
              <Button size="small">View on Github</Button>
            </CardActions>
            </Box>
          </Card>
        )
      }})}
    </Box>
  )
}

export default Project;