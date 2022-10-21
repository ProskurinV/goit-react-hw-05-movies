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

// export const Footer = styled.div`
//   background-color: #f7f7f7;

//   padding-top: 29px;
//   padding-bottom: 29px;
// `;

// .footer__list {
//   gap: 10px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: baseline;
// }

// .footer__item {
//   gap: 3px;
//   height: 16px;

//   display: flex;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 1.14;
//   color: #545454;

//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.19;
//   }
// }

// .show-hover {
//   &:hover,
//   &:focus {
//     color: #2196f3;
//   }
// }
