import React from 'react';
import { StyledMicroLink } from './NewsItem.style';

const NewsItem = ({ url, large, ...rest }) => {
  return (
    <StyledMicroLink url={url} size={large ? 'large' : 'normal'} {...rest} />
  );
};

export default NewsItem;
