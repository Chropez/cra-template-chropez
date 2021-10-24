import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import TypedText from 'components/TypedText';
import { Box, Link, Typography } from '@mui/material';
import logo from './logo.svg';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: ${({ theme }) => theme.secondaryBackground.bgImage};
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

const AboutLink = styled(Link)`
  color: ${({ theme }) => theme.secondaryBackground.linkColor};
`;

const RootRoute: FC = () => (
  <Wrapper>
    <Logo src={logo} alt="logo" />
    <Typography variant="h2">Create React App</Typography>
    <Box mt={5}>
      <TypedText text="An opinionated template ready to use" variant="body1" />
    </Box>
    <Box mt={5}>
      <AboutLink href="/about">Read more about it</AboutLink>
    </Box>
  </Wrapper>
);

export default RootRoute;
