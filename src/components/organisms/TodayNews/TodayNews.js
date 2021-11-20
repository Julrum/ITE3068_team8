import React, { useEffect } from 'react';
import { StyledTodayNews, StyledTitle, StyledNewsContainer } from './TodayNews.style';
import MainNewsBox from '../../molecules/MainNewsBox';

const TodayNews = () => {
  
  useEffect(() => {
  })

  return (
    <StyledTodayNews>
      <StyledTitle>오늘의 뉴스</StyledTitle>
      <StyledNewsContainer>
        <MainNewsBox/>
        <MainNewsBox/>
        <MainNewsBox/>
      </StyledNewsContainer>
    </StyledTodayNews>
  );
};

export default TodayNews;
