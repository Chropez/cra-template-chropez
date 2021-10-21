import React, { FC } from 'react';
import { ArrowBack } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import AboutList from './AboutList';

const AboutRoute: FC = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} href="/">
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRA template
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="sm">
      <Box mt={4}>
        <AboutList />
      </Box>
    </Container>
  </>
);

export default AboutRoute;
