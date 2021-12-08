import { useEffect, useState } from "react";
import { Auth, API } from 'aws-amplify';
import {
  StyledTodayNews,
  StyledTitle,
  StyledNewsContainer,
  Content,
} from './TodayNews.style';
import NewsItem from '../../molecules/NewsItem/NewsItem';
import { listUsers } from '../../../graphql/queries';

const TodayNews = () => {

  let [ userInfo, setUserInfo ] = useState();

  useEffect(() => {
    async function getUserInfo() {
      let login = await Auth.currentAuthenticatedUser().catch(e => console.log(e));
      if(login)  {
        let user = await API.graphql({query: listUsers, variables: {filter: {email: {eq: login.attributes.email}}}});
        setUserInfo(user.data.listUsers.items[0]);
      }
      return 1;
    }
    getUserInfo();
    
  }, []);

  return (
    <StyledTodayNews>
      <StyledTitle>오늘의 뉴스</StyledTitle>
      <StyledNewsContainer>
        <Content>
          <NewsItem
            url={'https://news.mt.co.kr/mtview.php?no=2021120118490012787'}
            large
            style={{ height: '100%' }}
            userInfo={userInfo}
          />
        </Content>
        <Content>
          <NewsItem
            url={'https://www.sedaily.com/NewsView/22V5FKAI0Z'}
            large
            style={{ height: '100%' }}
            userInfo={userInfo}
          />
        </Content>
        <Content>
          <NewsItem
            url={
              'https://news.jtbc.joins.com/article/article.aspx?news_id=NB12035813'
            }
            large
            style={{ height: '100%' }}
            userInfo={userInfo}
          />
        </Content>
      </StyledNewsContainer>
    </StyledTodayNews>
  );
};

export default TodayNews;
