import {Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Link} from '@mui/material';
import Project from "./Project"
function Slide({slideSet, index}) {
  console.log(slideSet)
  // let techStackList = project.techStack.map((stack, index) => {
  //   if(stack !== "Featured"){
  //     if(index === project.techStack.length - 1){
  //       return(stack)
  //     }
  //     else{
  //       return(stack + ", ")
  //     }
  //   }})

  return (
                      <div className="slide">

    {slideSet.length > 0 &&
              slideSet.map((project, index) => {
                return(
                <Project key={slideSet.indexOf(project)} project={project} index={index} image={project.image}></Project>
                )

              })
            }
                            </div>

    // <Card sx={{ width: 350, minWidth: 300, margin: "10px", height: "300px", position: "relative"}}>
    //   <CardMedia
    //     component="img"
    //     height="50%"
    //     image= {project.thumbnail[0]}
    //     alt="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h7" component="div">
    //     {project.title}
    //     </Typography>
    //     {/* <Typography variant="body2" color="text.secondary">
    //     {project.description}
    //     </Typography> */}
    //     <Typography variant="body2" color="text.secondary">
    //     <strong>Stack:</strong> {techStackList.map((stack, index) => {
    //       return(stack)})}
    //     </Typography>
    //   </CardContent>
    //   <Box sx={{position: "absolute", bottom: "0px"}}>
    //   <CardActions>
    //     <Link href={project.githubLink} underline="none">
    //     <Button size="small" variant="outlined">View on Github</Button>
    //     </Link>
    //   </CardActions>
    //   </Box>
    // </Card>
  )
}

export default Slide;