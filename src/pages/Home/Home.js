import React from 'react';
import { StyledHome, MainContent, Tail } from './Home.style';
import DDay from '../../components/organisms/DDay';
import TodayNews from '../../components/organisms/TodayNews';
import MainRoute from '../../components/organisms/MainRoute';
import MainSchedule from '../../components/organisms/MainSchedule';

const Home = () => {
  return (
    <StyledHome>
      <MainContent>
        <DDay/>
        <TodayNews/>
        <MainRoute/>
        <MainSchedule/>
        <Tail/>
      </MainContent>
    </StyledHome>
  );
};

export default Home;
