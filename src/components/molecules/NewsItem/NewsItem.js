import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Like from '../../atoms/Like';

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
  StyledContentArea,
  StyledFooter,
} from './NewsItem.style';
import axios from 'axios';
import cheerio from 'cheerio';

const NewsItem = ({ url, large, userInfo, setUserInfo, ...rest }) => {
  const [metadata, setMetadata] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchOG = async (url) => {
    setMetadata(null);
    setError(null);
    setLoading(true);

    let data = {};
    let status = 'success'

    await axios
      .get('https://cors-anywhere.herokuapp.com/'+url, { crossdomain: true })
      .then((Response) => {
        const $1 = cheerio.load(Response.data);
        $1('head>meta').each((index, item) => {
          if (item.attribs.content === 'text/html; charset=euc-kr'){
            status = 'fail';
            return false;
          }
          if (item.attribs.property === 'og:locale' && item.attribs.content !== 'ko_KR') {
            status = 'fail';
            return false;
          }
          if (item.attribs.property === 'og:title')
            data.title = item.attribs.content;
          else if(item.attribs.property === 'og:description')
            data.description = item.attribs.content;
          else if(item.attribs.property === 'og:image'){
            data.image = {};
            data.image.url = item.attribs.content;
          }
          else if(item.attribs.property === 'og:site_name')
            data.publisher = item.attribs.content;
          else if(item.attribs.property === 'dd:publisher' && !data.publisher)
            data.publisher = item.attribs.content;
        });

        const $2 = cheerio.load(Response.data);
        $2('head>link').each((index, item) => {
            if (item.attribs.rel === 'shortcut icon' && !data.logo) {
              // console.log(new URL( item.attribs.href, data.image.url))
              data.logo = {};
              if(data.publisher === 'YTN')
                data.logo.url = new URL(item.attribs.href, 'https://www.ytn.co.kr/');
              else if(data.publisher === '이데일리')
                data.logo.url = new URL(item.attribs.href, 'https://www.edaily.co.kr/');
              else
                data.logo.url = new URL(item.attribs.href, data.image.url);
            } else if (item.attribs.rel === 'icon' && !data.logo){
              data.logo = {};
              data.logo.url = new URL(item.attribs.href, data.image.url);
            }
        });
      })
      .catch(error => {
        status = 'fail'
      })

    if (!data.title) {
      status = 'fail'
    }

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
      {/* {error && <div>내용을 불러오지 못했습니다.</div>} */}
      {!error && metadata && (
        <StyledNewsItem large={large} onClick={handleClick(url)}>
          {metadata.image && metadata.image.url && (
            <StyledImg
              src={metadata.image.url}
              large={large}
              alt="News Image"
            />
          )}
          <StyledContentArea large={large}>
            <StyledTextArea large={large}>
              <StyledTitle>{metadata.title}</StyledTitle>
              <StyledDescription>{metadata.description}</StyledDescription>
            </StyledTextArea>
            <StyledFooter large={large}>
              <StyledPublisher>
                {metadata.logo && metadata.logo.url && (
                  <StyledPublisherIcon src={metadata.logo.url} alt="" />
                )}
                <StyledPublisherUrl>{metadata.publisher}</StyledPublisherUrl>
              </StyledPublisher>
              <Like url={url} userInfo={userInfo} setUserInfo={setUserInfo} />
            </StyledFooter>
          </StyledContentArea>
        </StyledNewsItem>
      )}
    </>
  );
};

export default NewsItem;
