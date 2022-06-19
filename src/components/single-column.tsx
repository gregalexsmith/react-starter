import React, { FC, ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
import { Box } from '.';

type Props = SpaceProps & {
  bg?: string;
  height?: string;
  className?: string;
  children: ReactNode;
};

export const SingleColumn: FC<Props> = ({
  bg,
  height,
  className,
  children,
  ...rest
}) => (
  <Box bg={bg} height={height}>
    <Box
      className={className}
      {...rest}
      height={height}
      mx="auto"
      width={[1, 0.8, 0.6]}>
      {children}
    </Box>
  </Box>
);
