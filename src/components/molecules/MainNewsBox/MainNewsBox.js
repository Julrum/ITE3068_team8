import React, { useState, useEffect } from 'react';
import { StyledNewsBox, StyledHeadLine, StyledLogo } from './MainNewsBox.style';
import logo from '../../../assets/image/templogo.png';
import image from '../../../assets/image/tempImg.jpg';

const MainNewsBox = () => {
  
  let [newslink, setNewslink ] = useState("https://news.naver.com/main/read.naver?mode=LSD&mid=shm&sid1=101&oid=421&aid=0005727949"); 
  let [headline, setHeadline ] = useState("GS에너지 '국내 최대 규모' 친환경 블루 암모니아 확보");
  useEffect(() => {
  })

  const onBoxClick = (link) => {
    window.open(link);
  }

  return (
    <StyledNewsBox background={image} onClick={() => onBoxClick(newslink)}>
      <StyledHeadLine>{headline}</StyledHeadLine>
      <StyledLogo logo={logo}/>
    </StyledNewsBox>
  );
};

export default MainNewsBox;
