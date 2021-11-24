import { 
  StyledTodayNews, StyledTitle, 
  StyledNewsContainer, Content } from './TodayNews.style';
import NewsItem from '../../molecules/NewsItem/NewsItem';

const TodayNews = () => {
  
  let newslink = "https://news.naver.com/main/read.naver?mode=LSD&mid=shm&sid1=101&oid=421&aid=0005727949";
  return (
    <StyledTodayNews>
      <StyledTitle>오늘의 뉴스</StyledTitle>
      <StyledNewsContainer>
        <Content>
          <NewsItem url={newslink} large style={{height: '100%'}}/>
        </Content>
        <Content>
          <NewsItem url={newslink} large style={{height: '100%'}}/>
        </Content>
        <Content>
          <NewsItem url={newslink} large style={{height: '100%'}}/>
        </Content>
      </StyledNewsContainer>
    </StyledTodayNews>
  );
};

export default TodayNews;
