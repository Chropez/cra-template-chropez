import React from 'react';
import './App.css';
// import styled from '@mui/styled-engine-sc';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { darken, Link, Slider, ThemeProvider } from '@mui/material';
import appTheme from './themes';
import logo from './logo.svg';

const MyComp = styled.div`
  color: ${({ theme }) => theme.components?.MyOwnComponent?.color};
`;

const CustomizedSlider = styled(Slider)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  :hover {
    color: ${darken(theme.palette.primary.main, 0.2)};
  }
`
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={appTheme}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
                <MyComp>Hello</MyComp>
              </p>
              <Link className="App-link" href="/login">
                Link to login
              </Link>
            </header>
            <Switch>
              <Route path="/" exact>
                Root page!
                <CustomizedSlider />
              </Route>
              <Route path="/login">Login page</Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
