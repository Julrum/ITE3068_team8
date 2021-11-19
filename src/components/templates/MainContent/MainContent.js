import React from 'react';
import {
  StyledMainContent
} from './MainContent.style';
import DDay from '../../organisms/DDay';
import TodayNews from '../../organisms/TodayNews';

const MainContent = () => (
  <StyledMainContent>
    <DDay/>
    <TodayNews/>
  </StyledMainContent>
);

export default MainContent;
