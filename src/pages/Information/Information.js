import React from 'react';
import InfoContents from '../../components/organisms/Information/InfoContents';
import SummaryList from '../../components/organisms/Information/SummaryList';
import Title from '../../components/organisms/Information/Title';
import { Info } from './Information.style';

const Information = () => {
  return <Info>
    <Title></Title>
    <SummaryList></SummaryList>
    <InfoContents></InfoContents>
  </Info>
};

export default Information;
