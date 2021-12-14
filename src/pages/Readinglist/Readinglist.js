import React, { useEffect } from 'react';
import { Layout, News } from './Readinglist.style';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';

const Readinglist = () => {
  const urls = [
    'https://news.mt.co.kr/mtview.php?no=2021120118490012787',
    'https://news.mt.co.kr/mtview.php?no=2021120118490012787',
    'https://news.mt.co.kr/mtview.php?no=2021120118490012787',
    'https://news.mt.co.kr/mtview.php?no=2021120118490012787',
    'https://news.mt.co.kr/mtview.php?no=2021120118490012787',
    'https://news.mt.co.kr/mtview.php?no=2021120118490012787',
    'https://news.mt.co.kr/mtview.php?no=2021120118490012787',
  ];

  useEffect(() => {
    document.title = 'Daesun | 읽기목록';
  });

  return (
    <Layout>
      <News>
        {urls.map((url) => (
          <NewsItem url={url} />
        ))}
      </News>
    </Layout>
  );
};

export default Readinglist;
