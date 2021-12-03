import React from 'react';
import { Contents, Content, Item, Title } from './CandPromise.style';

const CandPromise = ({ title, contents }) => {
  return (
    <Item>
      <Title>{title}</Title>
      <Contents>
        {contents.map((content, index) => (
          <Content key={index}>{content}</Content>
        ))}
      </Contents>
    </Item>
  );
};

export default CandPromise;
