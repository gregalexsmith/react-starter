import styled from 'styled-components';
import { Button as RebassButton } from 'rebass/styled-components';
import { compose, branch, renderComponent } from 'recompose';
import { propEq } from 'ramda';

const BaseButton = styled(RebassButton).attrs({
  bg: 'neutral.white',
  color: 'neutral.darkest',
  fontWeight: 'bold',
  p: 2,
  px: 3,
  boxShadow: 'card',
})`
  cursor: pointer;
  border-radius: ${p => p.theme.radii[1]};
`;

const PrimaryButton = styled(BaseButton).attrs({
  bg: 'primary.normal',
  color: 'neutral.white',
})``;

const PrimaryOutlineButton = styled(BaseButton).attrs({
  bg: 'neutral.white',
  color: 'primary.normal',
})`
  box-shadow: inset 0 0 0 2px ${p => p.theme.colors.primary.normal};
`;

const variation = value => propEq('variation', value);

export default compose(
  branch(variation('primary'), renderComponent(PrimaryButton)),
  branch(variation('primary-outline'), renderComponent(PrimaryOutlineButton))
)(PrimaryButton);
