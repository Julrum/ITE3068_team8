import React from 'react';
import SummaryIcon from '../../../atoms/Information/SummaryIcon';
import SummaryText from '../../../atoms/Information/SummaryText';
import { Cell } from './Summary.style';

const Summary = ({ image, text }) => {
  return (
    <Cell>
      <SummaryIcon image={image} />
      {text.map((item, index) => (
        <SummaryText text={item} key={index} />
      ))}
    </Cell>
  );
};

export default Summary;
