import React, { useEffect } from 'react';
import PollPageContent from '../../components/templates/PollPageContent/PollPageContent';
import PollChartDummyData from './PollChartDummyData';

const Poll = () => {
  useEffect(() => {
    document.title = 'Daesun | 여론조사';
  });
  return (
    <PollPageContent chartDummyData={PollChartDummyData}></PollPageContent>
  );
};

export default Poll;
