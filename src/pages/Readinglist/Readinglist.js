import React, { useState, useEffect } from 'react';
import { EmptyBookmarks, Layout, News } from './Readinglist.style';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';

import { Auth, API } from 'aws-amplify';
import { getUserByEmail } from '../../graphql/queries';
import { onBookmarksChanged } from '../../graphql/subscriptions';

const Readinglist = () => {
  const [userInfo, setUserInfo] = useState();
  const [bookmarks, setBookmarks] = useState();

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
    return () => setBookmarks([]);
  }, []);

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
    if (userInfo) {
      setBookmarks(userInfo.bookmark.bookmarkList);
    }
  }, [userInfo]);

  useEffect(() => {
    document.title = 'Daesun | 읽기목록';
  });

  return (
    <Layout>
      <News>
        {bookmarks &&
          bookmarks.length > 0 &&
          bookmarks.map((url) => (
            <NewsItem
              key={url}
              url={url}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          ))}
        {bookmarks && bookmarks.length === 0 && (
          <EmptyBookmarks>"북마크한 기사가 없습니다!"</EmptyBookmarks>
        )}
      </News>
    </Layout>
  );
};

export default Readinglist;
