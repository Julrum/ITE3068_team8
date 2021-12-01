import React, { useEffect, useState } from 'react';
import mql from '@microlink/mql';
import Skeleton from '@mui/material/Skeleton';

import {
  StyledDescription,
  StyledImg,
  StyledNewsItem,
  StyledPublisher,
  StyledPublisherIcon,
  StyledPublisherUrl,
  StyledTextArea,
  StyledTitle,
  StyledSkeleton,
} from './NewsItem.style';

const NewsItem = ({ url, large, ...rest }) => {
  const [metadata, setMetadata] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchOG = async (url) => {
    setMetadata(null);
    setError(null);
    setLoading(true);
    const { status, data } = await mql(url);
    if (status === 'success') {
      setMetadata(data);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOG(url);
  }, [url]);

  const handleClick = (link) => () => {
    window.open(link);
  };

  return (
    <>
      {loading && large && (
        <>
          <Skeleton
            variant="rectangular"
            width={320}
            height={160}
            sx={{ margin: 1 }}
          />
          <Skeleton width={320} height={30} sx={{ mx: 1 }} />
          <Skeleton width="80%" sx={{ mx: 1 }} />
          <Skeleton width="80%" sx={{ mx: 1 }} />
          <Skeleton width="60%" sx={{ mx: 1 }} />
        </>
      )}
      {loading && !large && (
        <StyledSkeleton>
          <Skeleton
            variant="rectangular"
            width={160}
            height={160}
            sx={{ margin: 1 }}
          />
          <div>
            <Skeleton width={320} height={30} sx={{ mx: 1 }} />
            <Skeleton width="80%" sx={{ mx: 1 }} />
            <Skeleton width="80%" sx={{ mx: 1 }} />
            <Skeleton width="60%" sx={{ mx: 1 }} />
          </div>
        </StyledSkeleton>
      )}
      {error && <div>내용을 불러오지 못했습니다.</div>}
      {metadata && (
        <StyledNewsItem large={large} onClick={handleClick(url)}>
          {metadata.image.url && (
            <StyledImg
              src={metadata.image.url}
              large={large}
              alt="News Image"
            />
          )}
          <StyledTextArea large={large}>
            <StyledTitle>{metadata.title}</StyledTitle>
            <StyledDescription>{metadata.description}</StyledDescription>
            <StyledPublisher>
              {metadata.logo.url && (
                <StyledPublisherIcon src={metadata.logo.url} alt="" />
              )}
              <StyledPublisherUrl>{metadata.publisher}</StyledPublisherUrl>
            </StyledPublisher>
          </StyledTextArea>
        </StyledNewsItem>
      )}
    </>
  );
};

export default NewsItem;
