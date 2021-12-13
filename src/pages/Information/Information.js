import React, { useEffect } from 'react';
import InfoContents from '../../components/organisms/Information/InfoContents';
import SummaryList from '../../components/organisms/Information/SummaryList';
import Title from '../../components/organisms/Information/Title';
import InformationChart from '../../components/organisms/InformationChart/InformationChart';
import { Info } from './Information.style';

const Information = () => {
  useEffect(() => {
    document.title = 'Daesun | 선거정보';
  });
  return (
    <Info>
      <Title /> <SummaryList /> <InfoContents /> <InformationChart />
    </Info>
  );
};

export default Information;
