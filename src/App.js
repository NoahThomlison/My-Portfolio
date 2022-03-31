import ReactFullpage from '@fullpage/react-fullpage';
import {Container, Box, Paper, Button} from '@mui/material';
import NavBar from './navBar.jsx';
import Intro from './Intro.jsx'
import About from './About.jsx'
import ProjectList from './ProjectList.jsx'
import './App.css'
import {projects} from './projectData.js'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Filter from "./Filter"


function App() {

  const anchors = ["Intro", "About", "Work"];
  let theme = createTheme({

  });
  theme = responsiveFontSizes(theme);

  theme.typography.body1 = {
  [theme.breakpoints.down('500')]: {
    fontSize: '.85rem',
  },
};

  
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
      navigationTooltips={anchors}
      scrollBar= {true}
      scrollOverflow= {true}

      render={({ state, fullpageApi }) => {
        return (
          <div>
            <ReactFullpage.Wrapper >
              <div className="heroImageRemoved ">
                  <Intro fullpageApi={fullpageApi} theme={theme}></Intro>
                  <About theme={theme}></About>
                  <ProjectList projects={projects} theme={theme}></ProjectList>
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

