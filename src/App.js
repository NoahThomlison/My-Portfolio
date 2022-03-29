import ReactFullpage from '@fullpage/react-fullpage';
import {Container, Box, Paper, Button} from '@mui/material';
import NavBar from './navBar.jsx';
import Intro from './Intro.jsx'
import About from './About.jsx'
import ProjectList from './ProjectList.jsx'
import Timeline from "./Timeline.jsx"
import Experiance from "./Experiance.jsx"
import './App.css'
import {projects} from './projectData.js'
import {experiance} from './experianceData.js'

function App() {

  const anchors = ["Intro", "About", "Work"];

  return (
    <div>
      <NavBar></NavBar>
      <ReactFullpage
      anchors={anchors}
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */
      scrollHorizontally = {true}  /* Because we are using the extension */
      scrollHorizontallyKey = {'YOUR KEY HERE'}
      paddingTop = {"10px"}
      dragAndMove = {true}
      navigation= {true}
      navigationTooltips={anchors}
      scrollBar= {true}
      scrollOverflow= {true}

      render={({ state, fullpageApi }) => {
        return (
          <div>
            <ReactFullpage.Wrapper >
              <div className="heroImageRemoved ">
                <div className="section heroImageAlt">
                  <Intro fullpageApi={fullpageApi}></Intro>
                </div>
                <div className="section aboutMeImage">
                  {/* <Container>
                    <Paper>  */}
                      <About></About>
                    {/* </Paper>
                  </Container> */}
                </div>
                <div className="section aboutMeImage">
                  <ProjectList projects={projects}></ProjectList>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          </div>
        );
      }}
      />
    </div>
  );
}

export default App;

