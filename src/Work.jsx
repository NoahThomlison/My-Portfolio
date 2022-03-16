import {Container, Box, Paper} from '@mui/material';

function Work(props) {
  const {projects} = props
  console.log(projects)
  return (
    <section>
      {projects.map((project) => {
        return(
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>{project.githubLink}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Work;
