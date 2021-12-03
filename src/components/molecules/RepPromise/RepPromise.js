import React from 'react';
import { Promise, RepPromiseList } from './RepPromise.style';

const RepPromise = ({ data }) => {
  return (
    <RepPromiseList>
      {data.map((promise, index) => (
        <Promise key={index}>{promise}</Promise>
      ))}
    </RepPromiseList>
  );
};

export default RepPromise;
