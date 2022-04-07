import ReactFullpage, {fullpage_api} from '@fullpage/react-fullpage';
import NavBar from './navBar.jsx';
import Intro from './Intro.jsx'
import AboutList from './AboutList.jsx'
import ProjectList from './ProjectList.jsx'
import './App.css'
import {projects} from './projectData.js'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

function App() {
  
  const anchors = ["Intro", "About", "Work"];

  let theme = createTheme({});
  theme = responsiveFontSizes(theme);
  theme.typography.body1 = {
    [theme.breakpoints.down('500')]: {
      fontSize: '.80rem',
    },
  };

  return (
    <div>
      <NavBar></NavBar>
      <ReactFullpage
      anchors={anchors}
      licenseKey = {'762DB1A2-3D20468B-A03B9177-ACE93B2B'}
      scrollingSpeed = {1000} /* Options here */
      scrollHorizontally = {true}  /* Because we are using the extension */
      scrollHorizontallyKey = {'762DB1A2-3D20468B-A03B9177-ACE93B2B'}
      paddingTop = {"10px"}
      dragAndMove = {true}
      navigationTooltips={anchors}
      scrollBar= {false}
      autoScrolling = {true}
      scrollOverflow= {true}
      

      render={({ state, fullpageApi }) => {
        return (
          <div>
            <ReactFullpage.Wrapper >
              <div className="heroImageRemoved ">
                  <Intro fullpageApi={fullpageApi} theme={theme}></Intro>
                  <AboutList theme={theme}></AboutList>
                  <ProjectList fullpage_api={fullpage_api} projects={projects} theme={theme}></ProjectList>
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

