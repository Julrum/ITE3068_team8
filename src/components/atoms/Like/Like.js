import React, { useEffect, useState } from 'react';
import img from '../../../assets/image/basic_icon.png';
import { StyledLike, StyledLikeText, StyledLikeButton, StyledLikeIcon } from './Like.style';

import { API } from 'aws-amplify';
import { addArticleToBookmarks, removeArticleFromBookmarks } from '../../../graphql/mutations';
import { onBookmarksChanged } from '../../../graphql/subscriptions';

const Like = ({ url, userInfo }) => {

  let [ flag, setFlag ] = useState();
  let [ user, setUser ] = useState(userInfo);

  let getIdx = (user, url) => {
    let bList = user.bookmark.bookmarkList;
    let idx = 0;
    for(; idx < bList.length; idx++) {
      if (bList[idx] === url) return idx;
    }
    return -1;
  }

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo])

  useEffect(() => {
    let sub;
    async function afterChange() {
        sub = await API.graphql({query: onBookmarksChanged, variables: {id: user.bookmark.id}})
        .subscribe({ next: newItem => { 
          setUser({...user, bookmark: newItem.value.data.onBookmarksChanged});
          }
        });
    }
    user && afterChange();

    return () => {
      sub && sub.unsubscribe();
    }
  }, [user]);

  useEffect(() => {
    async function init_like() {
        let idx = getIdx(user, url);
        if (idx < 0) setFlag(false);
        else setFlag(true);
    }
    url && user && init_like();
    
  }, [url, user]);

  const likeClick = async (e) => {
    e.stopPropagation();
    if (!user) {
      return;
    }
    let new_flag = !flag;
    if (new_flag)   // like
    {
      let idx = getIdx(user, url);
      if (idx < 0)   // no "url" in bookmarkList
      {
        await API.graphql({query: addArticleToBookmarks,
            variables: {input: { id: user.bookmark.id, article: url}}});

      }
    } 
    else            // dislike
    {
      let idx = getIdx(user, url);
      (idx > -1) && await API.graphql({query: removeArticleFromBookmarks,
        variables: {input: { id: user.bookmark.id, articleIndex: idx}}});
    }
    setFlag(!flag);
  };


  return (
    <StyledLike>
      <StyledLikeText>좋아요</StyledLikeText>
      <StyledLikeButton onClick={function (e) { likeClick(e); }}><StyledLikeIcon flag={flag} src={img}/></StyledLikeButton>
    </StyledLike>
  );
};

export default Like;
