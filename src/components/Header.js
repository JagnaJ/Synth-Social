import React from 'react';
import styled from 'styled-components';
import { flexCenter, boxShadow } from '../styles/mixins';

const HeaderWrapper = styled.header`
  ${boxShadow};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    font-weight: 500;
    &.active {
      border-bottom: 2px solid ${props => props.theme.colors.primary};
    }
  }
`;

const UserProfile = styled.div`
  ${flexCenter};
  gap: 10px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>Synth</Logo>
      <Nav>
        <a href="#feed" className="active">Feed</a>
        <a href="#explore">Explore</a>
        <a href="#discussions">Discussions</a>
      </Nav>
      <UserProfile>
        <img src="avatar.jpg" alt="User" width="40" height="40" />
        <span>Arthur Wood</span>
      </UserProfile>
    </HeaderWrapper>
  );
}
