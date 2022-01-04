import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

const SystemLabel = styled.label`
  ${color}
  ${space}
  ${typography}
`;

const Label = styled(SystemLabel).attrs({
  mb: 2,
  fontWeight: 'bold'
})`
  display: block;
`;

export default Label;
