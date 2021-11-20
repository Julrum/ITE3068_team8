import React from 'react';
import {
  StyledMainContent
} from './MainContent.style';
import DDay from '../../organisms/DDay';
import TodayNews from '../../organisms/TodayNews';
import MainRoute from '../../organisms/MainRoute';

const MainContent = () => (
  <StyledMainContent>
    <DDay/>
    <TodayNews/>
    <MainRoute/>
  </StyledMainContent>
);

export default MainContent;
