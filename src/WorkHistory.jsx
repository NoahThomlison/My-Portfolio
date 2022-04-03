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
              <p>Work in a multi-disciplined team to develop commercial high-end security cameras</p>
            </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </ThemeProvider>
  )
}


export default Education;

