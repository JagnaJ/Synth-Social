import React from 'react';
import styled from 'styled-components';
import { boxShadow } from '../styles/mixins';

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  ${boxShadow};
`;

const ProfileDetails = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <ProfileDetails>
        <h3>Benjamin Clementine</h3>
        <p>@benclementine</p>
        <Button>Edit Profile</Button>
        <p>45 synths | 110 followers | 322 following</p>
      </ProfileDetails>
    </SidebarWrapper>
  );
}
