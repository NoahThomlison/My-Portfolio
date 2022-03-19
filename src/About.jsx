import {Container, Box, Paper} from '@mui/material';

function About() {
  return (
    <Container>
      <Paper sx={{padding: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box sx={{padding: "10px"}}>
          <img src={require('./images/profilePic.jpg')} className="profilePicture"/>
        </Box>
        <Box  sx={{padding: "10px"}}>
          <h2>About me</h2>
          <h3>Thrid Person Bio</h3>
          {/* <p>Noah is a full-stack web developer. He attended a 6 month flex web development bootcamp in 2022. Prior to this he was a mechanical engineer with a degree in   mechanical engineering. He has experiance with</p> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a risus quis magna porta posuere quis eget justo. Nulla a ex eget sapien auctor sodales. Mauris   egestas vulputate neque at sodales. Pellentesque ut ipsum id nibh fermentum lacinia vitae eget magna. Nunc nec nisl ante. Aenean dapibus neque quis porta iaculis.  Vivamus mattis, est et tempor posuere, erat mi cursus ligula, quis lobortis dui nisl id urna. Nulla dolor dolor, commodo et arcu sed, commodo consectetur magna. Etiam   ut neque in ex tempor pulvinar a eget leo. Proin consequat arcu eu est gravida fermentum. Suspendisse convallis augue euismod quam vehicula, eget consectetur turpis  congue. Curabitur sed nisi mi. Sed pretium est ante, quis varius nibh condimentum quis. Pellentesque ultricies nunc tortor, a cursus metus aliquam ut.

          Nunc tempor luctus dui nec luctus. Curabitur eleifend vestibulum consequat. Sed sagittis mi metus, at lacinia orci luctus sagittis. Proin sollicitudin est sit amet elit  sodales pulvinar. Praesent sodales nunc vitae nulla semper porta volutpat a justo. Sed sem tellus, dignissim id mi at, feugiat cursus augue. Vestibulum iaculis ex sed   porta posuere.

          Fusce molestie ipsum vitae lectus lobortis, vel condimentum sem porta. Aliquam eget quam sed nisi consectetur molestie. Proin commodo dui mi.</p>
        </Box>
      </Paper>
    </Container>
  )
}


export default About;
