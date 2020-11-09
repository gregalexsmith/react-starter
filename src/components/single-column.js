import React from 'react';
import { Box } from './';

const SingleColumn = ({ bg, height, children, className, ...rest }) => (
  <Box bg={bg} height={height}>
    <Box
      className={className}
      {...rest}
      height={height}
      mx="auto"
      width={[1, 0.8, 0.6]}
    >
      {children}
    </Box>
  </Box>
);

export default SingleColumn;
