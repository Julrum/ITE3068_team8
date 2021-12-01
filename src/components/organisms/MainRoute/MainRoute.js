import React from 'react';
import { StyledMainRoute } from './MainRoute.style';
import ArrowRoute from '../../molecules/ArrowRoute';

const MainRoute = () => {
  return (
    <StyledMainRoute>
      <ArrowRoute to="/information" text="선거정보"/>
      <ArrowRoute to="/candidates" text="후보정보"/>
    </StyledMainRoute>
  );
};

export default MainRoute;
