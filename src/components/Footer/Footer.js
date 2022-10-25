// import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';
import { FooterEl, FooterList, FooterItem } from './Footer.styled';

export default function Footer() {
  return (
    <FooterEl as="footer">
      <FooterList>
        <FooterItem>© 2022 | All Rights Reserved |</FooterItem>
        <FooterItem>Developed with</FooterItem>
        <FooterItem>
          {/* <svg class="footer__icon" width="14" height="13">
              <use href="./images/mainHeader/symbol-defs.svg#icon-Vector"></use>
            </svg> */}
        </FooterItem>
        <FooterItem>
          {/* <a class="show-hover" href="#">
              GoIT Students
            </a> */}
        </FooterItem>
      </FooterList>
      <Outlet />
    </FooterEl>
  );
}
