import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color, space, typography, border, width } from 'styled-system';

const RouterLink = styled(Link)`
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }

  ${color}
  ${space}
  ${typography}
  ${border}
  ${width}
`;

export default RouterLink;
