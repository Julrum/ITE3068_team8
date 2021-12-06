import React, { useState } from 'react';
import { StyledLike, StyledLikeText, StyledLikeButton, StyledLikeIcon } from './Like.style';
import img from '../../../assets/image/basic_icon.png';

const Like = ({ url }) => {

  let [ flag, setFlag ] = useState(false);

  const likeClick = (e) => {
    setFlag(!flag);
    e.stopPropagation();
  };


  return (
    <StyledLike>
      <StyledLikeText>좋아요</StyledLikeText>
      <StyledLikeButton onClick={function (e) { likeClick(e); }}><StyledLikeIcon flag={flag} src={img}/></StyledLikeButton>
    </StyledLike>
  );
};

export default Like;
