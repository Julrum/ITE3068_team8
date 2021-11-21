import React from 'react';
import PollPageContent from '../../components/templates/PollPageContent/PollPageContent';
import PollChartDummyData from './PollChartDummyData';

const Poll = () => {
  return (
    <PollPageContent
      chartDummyData={PollChartDummyData}>
    </PollPageContent>
  );
};

export default Poll;