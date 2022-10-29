// import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './SharedLayout.styled';
import Loader from 'components/Loader';

import {
  Header,
  Nav,
  NavItem,
  Footer,
  FooterList,
  FooterItem,
} from './SharedLayout.styled';
import { routes } from 'routes';

export default function SharedLayout() {
  return (
    <Wrapper>
      <Header as="header">
        <Nav as="nav">
          <NavItem to={routes.HOME} end>
            Home
          </NavItem>
          <NavItem to={routes.MOVIES}>Movies</NavItem>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <div style={{ position: 'fixed', bottom: '0' }}>
        <Footer as="footer">
          <FooterList>
            <FooterItem>© 2022 | All Rights Reserved |</FooterItem>
            <FooterItem>Developed with GoIt Team</FooterItem>
            <FooterItem></FooterItem>
            <FooterItem></FooterItem>
          </FooterList>
        </Footer>
      </div>
    </Wrapper>
  );
}
