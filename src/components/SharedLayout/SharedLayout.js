// import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';
import { Wrapper } from './SharedLayout.styled';

import { Header, Nav, NavItem } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Wrapper>
      <Header as="header">
        <Nav as="nav">
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="movies">Movies</NavItem>
        </Nav>
      </Header>
      {/* <Footer>
        <div class="footer__list">
          <p class="footer__item">© 2022 | All Rights Reserved |</p>
          <p class="footer__item">Developed with</p>

          <p class="footer__item">
            <a class="show-hover" href="#">
              GoIT Student
            </a>
          </p>
        </div>
      </Footer> */}
      <Outlet />
    </Wrapper>
  );
}
