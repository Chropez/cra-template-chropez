import React, { FC, Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from 'themes';
import Routes from 'routes/Routes';
import { Provider } from 'react-redux';
import { store } from './store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </ThemeProvider>
  </Provider>
);

export default App;
