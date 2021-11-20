import React from 'react';
import {
  StyledMainContent
} from './MainContent.style';
import DDay from '../../organisms/DDay';
import TodayNews from '../../organisms/TodayNews';
import MainRoute from '../../organisms/MainRoute';
import MainSchedule from '../../organisms/MainSchedule';

const MainContent = () => (

  <StyledMainContent>
    <DDay/>
    <TodayNews/>
    <MainRoute/>
    <MainSchedule/>
  </StyledMainContent>
);

export default MainContent;