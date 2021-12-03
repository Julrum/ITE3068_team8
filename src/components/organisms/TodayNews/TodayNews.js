import {
  StyledTodayNews,
  StyledTitle,
  StyledNewsContainer,
  Content,
} from './TodayNews.style';
import NewsItem from '../../molecules/NewsItem/NewsItem';

const TodayNews = () => {
  return (
    <StyledTodayNews>
      <StyledTitle>오늘의 뉴스</StyledTitle>
      <StyledNewsContainer>
        <Content>
          <NewsItem
            url={'https://news.mt.co.kr/mtview.php?no=2021120118490012787'}
            large
            style={{ height: '100%' }}
          />
        </Content>
        <Content>
          <NewsItem
            url={'https://www.sedaily.com/NewsView/22V5FKAI0Z'}
            large
            style={{ height: '100%' }}
          />
        </Content>
        <Content>
          <NewsItem
            url={
              'https://news.jtbc.joins.com/article/article.aspx?news_id=NB12035813'
            }
            large
            style={{ height: '100%' }}
          />
        </Content>
      </StyledNewsContainer>
    </StyledTodayNews>
  );
};

export default TodayNews;
