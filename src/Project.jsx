import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper, Link} from '@mui/material';

function Project({project, index}) {
  
  return (
    <Card sx={{ width: 350, minWidth: 300, margin: "10px", height: "300px", position: "relative"}}>
      <CardMedia
        component="img"
        height="50%"
        image={project.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
        {project.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
        {project.description}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
        <strong>Stack:</strong> {project.techStack.map((stack, index) => {
          return(stack + " ")})}
        </Typography>
      </CardContent>
      <Box sx={{position: "absolute", bottom: "0px"}}>
      <CardActions>
        <Link href={project.githubLink} underline="none">
        <Button size="small" variant="outlined">View on Github</Button>
        </Link>
      </CardActions>
      </Box>
    </Card>
  )
}

export default Project;