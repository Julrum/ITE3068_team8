import React from 'react';
import { StyledMicroLink } from './NewsItem.style';

const NewsItem = ({ url, large, apiKey, ...rest }) => {
  return (
    <StyledMicroLink
      url={url}
      size={large ? 'large' : 'normal'}
      apiKey={apiKey}
      {...rest}
    />
  );
};

export default NewsItem;
