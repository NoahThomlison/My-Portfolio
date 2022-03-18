import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper} from '@mui/material';

function Work(props) {
  const {projects} = props
  console.log(projects)
  return (
    <Container sx={{display: "Flex"}}>
      {projects.map((project) => {
        return(
          <Card sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )
      })}
    </Container>
  )
}

export default Work;