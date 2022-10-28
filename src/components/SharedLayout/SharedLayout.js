// import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './SharedLayout.styled';
import Loader from 'components/Loader';
// import Footer from 'components/Footer';

import { Header, Nav, NavItem } from './SharedLayout.styled';
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
    </Wrapper>
  );
}
