import React from 'react';
import Sidebar from '../../components/organisms/Sidebar';
import {
  Content,
  ContentLayout,
  PageLayout,
  Header,
  Label,
  Section,
  Space,
} from './News.style';
import { datas, sidebarData } from './dummydata';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import ProfileWithLabel from '../../components/molecules/ProfileWithLabel/ProfileWithLabel';

const News = () => {
  return (
    <PageLayout>
      <Sidebar>
        {sidebarData.map((item) => (
          <>
            <ProfileWithLabel name={item.name} url={item.url} />
            <Space />
          </>
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
          {datas.items.map((item, index) => (
            <NewsItem key={index} url={item.originallink} apiKey="" />
          ))}
        </Content>
      </ContentLayout>
    </PageLayout>
  );
};

export default News;
