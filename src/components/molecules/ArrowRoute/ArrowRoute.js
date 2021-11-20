import { StyledArrowRoute, StyledNavigation } from './ArrowRoute.style';

const ArrowRoute = ({to, text}) => {
  return (
  <StyledArrowRoute to={to}>
    <StyledNavigation>{text} 알아보기</StyledNavigation>
  </StyledArrowRoute>);
};

export default ArrowRoute;
