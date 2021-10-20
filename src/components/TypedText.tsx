import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0; }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

interface StyledTypedTextProps {
  length: number;
}

const StyledTypedText = styled(Typography)<StyledTypedTextProps>`
  width: ${({ length }) => `${length + 1}ch`};
  animation: ${typing} 2s steps(${({ length }) => length}), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: ${({ theme }) => theme.components?.TypedText?.fontFamily || theme.typography.fontFamily};
  font-size: 1rem;
  color: ${({ theme }) => theme.components?.TypedText?.color || theme.palette.text.primary};
`;

interface Props extends Omit<TypographyProps, 'children'> {
  text: string;
}

const TypedText: FC<Props> = ({ text, ...rest }) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <StyledTypedText length={text.length} {...rest}>
      {text}
    </StyledTypedText>
  </>
);

export default TypedText;
