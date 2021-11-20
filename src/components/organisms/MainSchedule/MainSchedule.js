import React from 'react';
import { StyledMainSchedule, StyledTitle, StyledOl, StyledLi } from './MainSchedule.style';
import TimelineContent from '../../molecules/TimelineContent';

const MainRoute = () => {

  const timelineData = [
    {
        text: '예비후보자 등록',
        date: '7.12(월) 부터',
        correction: 1,
        background: '#9559E1',
    },
    {
        text: '후보자등록 신청',
        date: '2.13(일) ~ 2.14(월)',
        correction: 1,
        background: '#D2AEFF',
    },
    {
      text: '재외국민 투표',
      date: '2.23(수) ~ 2.28(월)',
      correction: 1,
      background: '#D2AEFF',
    },
    {
      text: '선상투표',
      date: '3.1(화) ~ 3.4(금)',
      correction: 1,
      background: '#D2AEFF',
    },
    {
      text: '사전투표',
      date: '3.4(금) ~ 3.5(토)',
      correction: 1,
      background: '#D2AEFF',
    },
    {
      text: '선거일 투표/개표',
      date: '3.9(수)\n 6시~18시',
      correction: 0.5,
      background: '#D2AEFF',
    },
]

  return (
    <StyledMainSchedule>
      <StyledTitle>선거 주요 일정</StyledTitle>
      <StyledOl>
        {timelineData.map(item => <StyledLi key={item.text} numdata={timelineData.length}>
          <TimelineContent item={item} numdata={timelineData.length}/>
        </StyledLi> )}
      </StyledOl>
    </StyledMainSchedule>
  );
};

export default MainRoute;
