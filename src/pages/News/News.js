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
import { sidebarData } from './dummydata';
import { getUrl } from '../../api';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import ProfileWithLabel from '../../components/molecules/ProfileWithLabel/ProfileWithLabel';

const News = () => {
  const [selected, setSelected] = useState();
  const [urls, setUrls] = useState([]);
  const [urlsError, setUrlsError] = useState(null);

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
              />
            </Section>
            <Section>
              <Label>선거 뉴스</Label>
              <NewsItem url="https://www.seoul.co.kr/news/newsView.php?id=20211201500223&wlog_tag3=naver" />
              <NewsItem url="http://www.busan.com/view/busan/view.php?code=2021120119293257464" />
            </Section>
          </Header>
          {urlsError && <div>뉴스를 불러오지 못했습니다.</div>}
          {urls &&
            urls.map((item, index) => (
              <NewsItem key={index} url={item.originallink} />
            ))}
        </Content>
      </ContentLayout>
    </PageLayout>
  );
};

export default News;
