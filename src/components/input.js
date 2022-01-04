import styled from 'styled-components';
import { color, space, typography, border, width } from 'styled-system';

const SystemInput = styled.input`
  ${color}
  ${space}
  ${typography}
  ${border}
  ${width}
`;

const Input = styled(SystemInput).attrs({
  mb: 1,
  py: 3,
  px: 3,
  fontSize: 2,
  borderRadius: 1,
  border: '1px solid',
  width: '50%'
})`
  display: block;
`;

export default Input;
