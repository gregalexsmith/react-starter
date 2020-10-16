import React from 'react';
import Spinner from 'react-spinners/ScaleLoader';
import styled from 'styled-components';
import { Box } from './';

const Loader = styled(Spinner).attrs({
  color: '#3649FC',
})`
  display: block;
`;

const Container = styled(Box).attrs()``;

export default props => (
  <Container>
    <Loader {...props} />
  </Container>
);
