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
      <Outlet />
    </Wrapper>
  );
}
