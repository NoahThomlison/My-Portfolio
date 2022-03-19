import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper} from '@mui/material';

function Work(props) {
  const {projects} = props
  console.log(projects)
  return (
    <Box sx={{display: "Flex", flexWrap: "wrap", padding: "100px, 10px, 0px, 10px"}}>
      {projects.map((project) => {
        return(
          <Card sx={{ maxWidth: 300, minWidth: 200, margin: "10px", height: "300px" }}>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {project.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {project.stack}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View on Github</Button>
            </CardActions>
          </Card>
        )
      })}
    </Box>
  )
}

export default Work;