import React from 'react';
import Spinner from 'react-spinners/ScaleLoader';
import styled from 'styled-components';
import { Box } from './';

const StyledLoader = styled(Spinner).attrs({
  color: 'primary.normal'
})`
  display: block;
`;

const Container = styled(Box).attrs()``;

const Loader = (props) => (
  <Container>
    <StyledLoader {...props} />
  </Container>
);

export default Loader;
