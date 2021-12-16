import { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyledTodayNews,
  StyledTitle,
  StyledNewsContainer,
  Content,
} from './TodayNews.style';
import NewsItem from '../../molecules/NewsItem/NewsItem';
import { getUserByEmail } from '../../../graphql/queries';
import { onBookmarksChanged } from '../../../graphql/subscriptions';

const TodayNews = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    let sub;
    async function afterChange() {
      sub = await API.graphql({
        query: onBookmarksChanged,
        variables: { id: userInfo.bookmark.id },
      }).subscribe({
        next: (newItem) => {
          newItem &&
            setUserInfo({
              ...userInfo,
              bookmark: newItem.value.data.onBookmarksChanged,
            });
        },
      });
    }
    userInfo && afterChange();

    return () => {
      sub && sub.unsubscribe();
    };
  }, [userInfo, setUserInfo]);

  useEffect(() => {
    async function getUserInfo() {
      let login = await Auth.currentAuthenticatedUser().catch((e) =>
        console.log(e),
      );
      if (login) {
        let user = await API.graphql({
          query: getUserByEmail,
          variables: { email: login.attributes.email },
        });
        setUserInfo(user.data.getUserByEmail.items[0]);
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
            url={
              'http://edu.chosun.com/site/data/html_dir/2021/12/14/2021121401248.html'
            }
            large
            style={{ height: '100%' }}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Content>
        <Content>
          <NewsItem
            url={'http://www.segye.com/newsView/20211213514759?OutUrl=naver'}
            large
            style={{ height: '100%' }}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Content>
        <Content>
          <NewsItem
            url={
              'https://newsis.com/view/?id=NISX20211213_0001686472&cID=10301&pID=10300'
            }
            large
            style={{ height: '100%' }}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Content>
      </StyledNewsContainer>
    </StyledTodayNews>
  );
};

export default TodayNews;
