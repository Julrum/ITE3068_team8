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
import { sidebarData } from './sidebarData';
import { getUrl } from '../../api';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import ProfileWithLabel from '../../components/molecules/ProfileWithLabel/ProfileWithLabel';

const News = () => {
  const [selected, setSelected] = useState();
  const [urls, setUrls] = useState([]);
  const [urlsError, setUrlsError] = useState(null);
  const [userInfo, setUserInfo] = useState();

  const fetchUrl = async (cand, sort) => {
    setUrls([]);
    setUrlsError(null);

    const response = await getUrl();

    if (response.error) setUrlsError(response.error); 
    else {
      if (cand === 0){
        let temp = []; //(response.data.body.cand[0].links).concat(response.data.body.cand[1].links);
        response.data.body.cand.forEach((item) => {
          temp = temp.concat(item.links);
        });

        temp = temp.sort(() => Math.random() - 0.5).slice(0, 5);

        console.log(temp);
        console.log(cand);
        console.log([...new Set(temp)]);
        setUrls([...new Set(temp)]);
      }
      else
        setUrls(response.data.body.cand[cand-1].links);
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
    fetchUrl(0);
  }, []);

  const handleClick = (index, selected) => {
    fetchUrl(index+1);
    if (index !== selected) {
      setSelected(index);
    } else {
      setSelected(-1);
      fetchUrl(0);
    }
  };

  return (
    <PageLayout>
      <Sidebar>
        {sidebarData.map((item, index) => (
          <SidebarItem
            key={index}
            onClick={() => handleClick(index, selected)}
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
                url="https://newsis.com/view/?id=NISX20211213_0001686472&cID=10301&pID=10300"
                large
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            </Section>
            <Section>
              <Label>선거 뉴스</Label>
              <NewsItem
                url="https://www.khan.co.kr/national/national-general/article/202112141315001"
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <NewsItem
                url="http://news.tvchosun.com/site/data/html_dir/2021/12/13/2021121390089.html"
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            </Section>
          </Header>
          {urlsError && <div>뉴스를 불러오지 못했습니다.</div>}
          {/* {urls &&
            urls.map((item, index) => (
              <NewsItem
                key={index}
                url={item}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            ))} */}
        </Content>
      </ContentLayout>
    </PageLayout>
  );
};

export default News;
