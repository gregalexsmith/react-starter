import styled from 'styled-components';
import { Section } from './';

export default styled(Section).attrs({
  px: 3,
  bg: 'white',
  py: 5,
  mt: 3,
  isMain: true,
})`
  border-radius: 50px 50px 0 0;
`;
