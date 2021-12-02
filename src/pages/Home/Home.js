import React from 'react';
import { StyledHome, MainContent, Tail } from './Home.style';
import DDay from '../../components/organisms/DDay';
import TodayNews from '../../components/organisms/TodayNews';
import MainRoute from '../../components/organisms/MainRoute';
import MainSchedule from '../../components/organisms/MainSchedule';
import backgroundimage from '../../assets/image/mainBackground2.jpg';

const Home = () => {
  return (
    <StyledHome>
      <MainContent background={backgroundimage}>
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
