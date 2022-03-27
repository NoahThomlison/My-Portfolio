import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper} from '@mui/material';

function Project(props) {
  const {project} = props


  return (
            <Card sx={{ width: 400, minWidth: 300, margin: "10px", height: "300px" }}>
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
                <Typography variant="body2" color="text.secondary">
                {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <br></br>
                <strong>Stack:</strong> {project.techStack.map((stack, index) => {
                  return(stack + " ")})}
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
}

export default Project;