import styled from 'styled-components';
import { color, space, typography, border, width } from 'styled-system';
import { Link } from 'react-router-dom';

const RouterLink = styled(Link)`
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.primary.dark};
  }

  ${color}
  ${space}
  ${typography}
  ${border}
  ${width}
`;

export default RouterLink;
