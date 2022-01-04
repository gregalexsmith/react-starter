import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import { RouterLink } from '../../../components';

const Title = styled(Text).attrs({
  fontSize: [4, 4, 5, 5],
  fontWeight: 'bold',
  py: 3,
})``;

const NavLink = styled(RouterLink).attrs({
  ml: 4,
  color: 'neutral.dark',
})`
  text-decoration: none;
  :hover {
    color: ${props => props.theme.colors.neutral.light};
  }
`;

const Navigation = ({ showLinks = true }) => (
  <Flex alignItems="center">
    <Title>React Starter</Title>




    <Box mx="auto" />

    {showLinks && (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>
    )}
  </Flex>
);

export default Navigation;
