import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bacgroundImg from '../../images/header768@2x-min.jpg';

export const Wrapper = styled.div`
  margin: 0 auto;
  /* width: 100%; */
  max-width: 1280px;
`;

export const Header = styled.div`
  background-image: url(${bacgroundImg});
  min-height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 40px;
`;

export const NavItem = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;

  color: #ffffff;
  text-decoration: none;

  &.active {
    color: #ff001b;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ff001b;
  }
`;
