import ReactFullpage from '@fullpage/react-fullpage';
import {Container, Box, Paper} from '@mui/material';
import NavBar from './navBar.jsx';
import Intro from './Intro.jsx'
import About from './About.jsx'
import Work from './Work.jsx'
import './App.css'
import {projects} from './data.js'

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

      render={({ state, fullpageApi }) => {
        return (
          <div>
            <ReactFullpage.Wrapper >
              <div className="heroImage">
                <div className="section">
                  <Intro></Intro>
                </div>
                <div className="section">
                  <About></About>
                </div>
                <div className="section">
                  <Work projects={projects}></Work>
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

