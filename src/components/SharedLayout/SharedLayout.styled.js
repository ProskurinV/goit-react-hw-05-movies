import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bacgroundImg from '../../images/header768@2x-min.jpg';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

export const Header = styled.div`
  background-image: url(${bacgroundImg});
  min-height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 20px;
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

export const Footer = styled.div`
  background-color: lightgray;
  padding-top: 15px;
  padding-bottom: 15px;
  /* margin-top: 20px; */
  width: 100vw;
`;

export const FooterList = styled.div`
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
`;

export const FooterItem = styled.p`
  gap: 3px;
  height: 16px;
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  color: #545454;
`;
