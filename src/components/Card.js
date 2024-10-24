import React from 'react';
import styled from 'styled-components';
import { boxShadow } from '../styles/mixins';

const CardWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  ${boxShadow};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export default function Card({ content, author }) {
  return (
    <CardWrapper>
      <p>{content}</p>
      <CardFooter>
        <span>{author}</span>
        <button>Share</button>
      </CardFooter>
    </CardWrapper>
  );
}
