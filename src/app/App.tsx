import React, { FC, Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from 'themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Routes from 'routes/Routes';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  </ThemeProvider>
);

export default App;
