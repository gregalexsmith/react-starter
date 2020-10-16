import React from 'react';
import { Flex, Box } from './';

const Section = ({ bg, fill, isMain, children, className, ...rest }) => (
  <Box fill={fill} flex={isMain ? `1 1 auto` : null}>
    <Flex width={1} height="100%">
      <Box
        bg={bg}
        className={className}
        {...rest}
        mx="auto"
        px={[5, 5, 6]}
        width={[1, 0.8, 0.6]}
      >
        {children}
      </Box>
    </Flex>
  </Box>
);

export default Section;
