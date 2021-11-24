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
    fetchUrl('대선', 1);
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
                url="https://www.kpanews.co.kr/article/show.asp?idx=227326&category=D"
                large
              />
            </Section>
            <Section>
              <Label>선거 뉴스</Label>
              <NewsItem url="https://www.kpanews.co.kr/article/show.asp?idx=227326&category=D" />
              <NewsItem url="https://www.kpanews.co.kr/article/show.asp?idx=227326&category=D" />
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
