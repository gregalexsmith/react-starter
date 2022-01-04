import styled from 'styled-components';
import { Button as RebassButton } from 'rebass/styled-components';

const BaseButton = styled(RebassButton).attrs({
  bg: 'neutral.white',
  color: 'neutral.darkest',
  fontWeight: 'bold',
  p: 2,
  px: 3,
  boxShadow: 'card'
})`
  cursor: pointer;
  border-radius: ${(p) => p.theme.radii[1]};
`;

const PrimaryButton = styled(BaseButton).attrs({
  bg: 'primary.normal',
  color: 'neutral.white'
})``;

const PrimaryOutlineButton = styled(BaseButton).attrs({
  bg: 'neutral.white',
  color: 'primary.normal'
})`
  box-shadow: inset 0 0 0 2px ${(p) => p.theme.colors.primary.normal};
`;

const DefaultButton = (props) => {
  if (props.variation === 'primary-outline') {
    return <PrimaryOutlineButton {...props} />;
  }

  return <PrimaryButton {...props} />;
};

export default DefaultButton;
