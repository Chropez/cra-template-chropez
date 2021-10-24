import React, { FC, useEffect } from 'react';
import { ArrowBack } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { useGetRandomDogImgUrlQuery } from 'services/dog-api';
import { useAppDispatch, useAppSelector } from 'app/store';
import AboutList from './AboutList';
import DogCard from './DogCard';
import { incrementNumberOfDogsShown, selectNumberOfDogsShown } from './about-slice';

const AboutRoute: FC = () => {
  const numbereOfDogsShown = useAppSelector(selectNumberOfDogsShown);
  const { data, isLoading, error } = useGetRandomDogImgUrlQuery(null, { pollingInterval: 3000 });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(incrementNumberOfDogsShown());
    }
  }, [data, dispatch]);

  return (
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
        <Box mt={4}>
          {isLoading && <Typography>Loading...</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          {!isLoading && !error && data && <DogCard numberOfDogsShown={numbereOfDogsShown} imgUrl={data} />}
        </Box>
      </Container>
    </>
  );
};

export default AboutRoute;
