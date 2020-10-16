import React from 'react';
import { Flex } from 'rebass';
import { Section, Heading } from '../../../components';

const Navigation = () => (
  <Section>
    <Flex alignItems="center" justifyContent="space-between" pt={2}>
      <Heading>React Starter</Heading>
    </Flex>
  </Section>
);

export default Navigation;
