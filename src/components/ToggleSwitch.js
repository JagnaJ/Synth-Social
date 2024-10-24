import React from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Toggle = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 20px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 50%;
    transition: 0.2s;
  }
`;

export default function ToggleSwitch({ isPrivate, onToggle }) {
  return (
    <SwitchWrapper>
      <span>Public</span>
      <Toggle onClick={onToggle} style={{ justifyContent: isPrivate ? 'flex-end' : 'flex-start' }} />
      <span>Private</span>
    </SwitchWrapper>
  );
}
