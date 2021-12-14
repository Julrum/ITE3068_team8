import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/organisms/Sidebar';
import {
  Content,
  ContentLayout,
  Header,
  Label,
  PageLayout,
  Section,
  SidebarItem,
} from './News.style';
import { Auth, API } from 'aws-amplify';
import { getUserByEmail } from '../../graphql/queries';
import { sidebarData } from './dummydata';
import { getUrl } from '../../api';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import ProfileWithLabel from '../../components/molecules/ProfileWithLabel/ProfileWithLabel';

const News = () => {
  const [selected, setSelected] = useState();
  const [urls, setUrls] = useState([]);
  const [urlsError, setUrlsError] = useState(null);
  const [userInfo, setUserInfo] = useState();

  const fetchUrl = async (keywords, display) => {
    setUrls([]);
    setUrlsError(null);

    const response = await getUrl(keywords, display);

    if (response.error) setUrlsError(response.error);
    else {
      setUrls(response.data.items);
    }
  };
  useEffect(() => {
    document.title = 'Daesun | 뉴스';
  });
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
    fetchUrl('대선', 5);
  }, []);

  const handleClick = (keyword, index, selected) => {
    fetchUrl(keyword, 1);
    if (index !== selected) {
      setSelected(index);
    } else {
      setSelected(-1);
      fetchUrl('대선', 1);
    }
  };

  return (
    <PageLayout>
      <Sidebar>
        {sidebarData.map((item, index) => (
          <SidebarItem
            key={index}
            onClick={() => handleClick(item.name, index, selected)}
            index={index}
            selected={selected}
          >
            <ProfileWithLabel name={item.name} url={item.url} />
          </SidebarItem>
        ))}
      </Sidebar>
      <ContentLayout>
        <Content>
          <Header>
            <Section>
              <Label>후보 뉴스</Label>
              <NewsItem
                url="https://news.mt.co.kr/mtview.php?no=2021120118490012787"
                large
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            </Section>
            <Section>
              <Label>선거 뉴스</Label>
              <NewsItem
                url="https://www.sedaily.com/NewsView/22V5FKAI0Z"
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <NewsItem
                url="http://www.busan.com/view/busan/view.php?code=2021120119293257464"
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            </Section>
          </Header>
          {urlsError && <div>뉴스를 불러오지 못했습니다.</div>}
          {urls &&
            urls.map((item, index) => (
              <NewsItem
                key={index}
                url={item.originallink}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            ))}
        </Content>
      </ContentLayout>
    </PageLayout>
  );
};

export default News;
