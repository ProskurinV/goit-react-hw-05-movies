import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLinkBack } from './BackLink.styled';

export default function BackLink({ to, children }) {
  return (
    <StyledLinkBack to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLinkBack>
  );
}

BackLink.propTypes = {
  to: PropTypes.PropTypes.object.isRequired,
  children: PropTypes.node,
};
