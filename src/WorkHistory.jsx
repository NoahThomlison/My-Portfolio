import {Container, Box, Paper, Typography, ThemeProvider} from '@mui/material';

function Education({theme}) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <table>
          <tbody>
            <tr>
              <td>Motorola Solutions</td>
              <td>Mechanical Design Engineer</td>
              <td>Vancouver, British Columbia</td>
              <td>May 2021 to Current</td>
            </tr>
            <tr>
              <td colspan="3">
                <p>Work in a multi-disciplined team to develop commercial high-end security cameras</p>
              </td>
            </tr>
            <tr>
              <td colspan="3">
              <p>Coordinate with international suppliers to source and plan project timelines</p>
            </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>WestMill Industries</td>
              <td>Mechanical Design Engineer</td>
              <td>Abbotsford, British Columbia</td>
              <td>May 2019​ to May 2021​</td>
            </tr>
            <tr>
              <td colspan="3">
                <p>Design large scale-forestry equipment and machinery</p>
              </td>
            </tr>
            <tr>
              <td colspan="3">
              <p>Creation of project plans with project managers</p>
            </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Modular Driven Technologies</td>
              <td>Design Engineer</td>
              <td>Chilliwack, British Columbia</td>
              <td>May 2016​ to May 2019​</td>
            </tr>
            <tr>
              <td colspan="3">
                <p>Design, sourcing and testing of consumer sporting goods</p>
              </td>
            </tr>
            <tr>
              <td colspan="3">
              <p>Manage projects for new products, lead design meetings and product kickoff meetings</p>
            </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </ThemeProvider>
  )
}


export default Education;

