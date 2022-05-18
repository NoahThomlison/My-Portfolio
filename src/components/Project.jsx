import {Typography, CardMedia, CardActions, CardContent, Button, Box, Link, Paper } from '@mui/material';

function Project({width, project, index}) {

  let techStackList = project.techStack.map((stack, index) => {
    if(stack !== "Featured"){
      if(index === project.techStack.length - 1){
        return(stack)
      }
      else{
        return(stack + ", ")
      }
    }})

  return (
    <Box className="project flip-card" >
      <Paper className="flip-card-inner">
        <Box className="flip-card-front" sx={{borderRadius: "5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {project.title}
          </Typography>
        </CardContent>
          <CardMedia
            className="projectImage"
            component="img"
            image= {project.thumbnail[0]}
            alt="green iguana"
          />
        </Box>
        <Box className="flip-card-back" sx={{borderRadius: "5px"}}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="flip-card-back-text">
              {project.title}
            </Typography>
              <div>
                <Typography variant="body2" color="text.secondary" className="flip-card-back-text">
                  {project.description}
                </Typography>
              </div>
            <Typography variant="body2" color="text.primary" className="flip-card-back-text">
              <strong>Stack:</strong> {techStackList.map((stack, index) => {
                return(stack)})}
            </Typography>
          </CardContent>
          <Box sx={{position: "absolute", bottom: "0px"}}>
            <CardActions>
              <Link href={project.githubLink} underline="none">
              <Button size="small" variant="outlined">View on Github</Button>
              </Link>
            </CardActions>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Project;