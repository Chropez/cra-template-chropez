import logo from './logo.svg';
import './App.css';
// import styled from '@mui/styled-engine-sc';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { darken, Link, Slider, ThemeProvider } from '@mui/material';
import theme from './themes';

const MyComp = styled.div`
  color: ${({ theme }) => theme.components?.MyOwnComponent?.color};
`;

const CustomizedSlider = styled(Slider)(
  ({ theme }) => `
  color: ${theme.palette.primary};
  :hover {
    color: ${darken(theme.palette.primary.main, 0.2)};
  }
`,
);

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
                <MyComp>Hello</MyComp>
              </p>
              <Link
                className="App-link"
                href="/login"
              >
                Link to login
              </Link>
            </header>
            <Switch>
              <Route path="/" exact={true}>
                Root page!
                <CustomizedSlider />

              </Route>
              <Route path="/login">
                Login page
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
