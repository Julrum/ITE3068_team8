import React from 'react';
import Sidebar from '../../components/organisms/Sidebar';
import {
  Content,
  ContentLayout,
  PageLayout,
  Header,
  Label,
  Section,
} from './News.style';
import datas from './dummydata';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';

const News = () => {
  return (
    <PageLayout>
      <Sidebar>sidebar</Sidebar>
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
