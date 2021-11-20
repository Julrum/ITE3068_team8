import React from 'react';
import {
  StyledHeaderbar,
  StyledTitle,
  StyledButtonArea,
  StyledLink,
} from './Headerbar.style';

const Headerbar = () => {
  return (
    <StyledHeaderbar>
      <StyledTitle to="/">Daesun</StyledTitle>
      <StyledButtonArea>
        <StyledLink to="/info">선거정보</StyledLink>
        <StyledLink to="/candidates">후보정보</StyledLink>
        <StyledLink to="/news">뉴스</StyledLink>
        <StyledLink to="/poll">여론조사</StyledLink>
      </StyledButtonArea>
    </StyledHeaderbar>
  );
};

export default Headerbar;
