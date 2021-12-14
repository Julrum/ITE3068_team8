import React, { useEffect, useState } from 'react';
import img from '../../../assets/image/basic_icon.png';
import { StyledLike, StyledLikeText, StyledLikeButton, StyledLikeIcon } from './Like.style';

import { API } from 'aws-amplify';
import { addArticleToBookmarks, removeArticleFromBookmarks } from '../../../graphql/mutations';
import { onBookmarksChanged } from '../../../graphql/subscriptions';

const Like = ({ url, userInfo, setUserInfo }) => {

  let [ flag, setFlag ] = useState();

  let getIdx = (user, url) => {
    let bList = user.bookmark.bookmarkList;
    let idx = 0;
    for(; idx < bList.length; idx++) {
      if (bList[idx] === url) return idx;
    }
    return -1;
  }

  useEffect(() => {
    let sub;
    async function afterChange() {
        sub = await API.graphql({query: onBookmarksChanged, variables: {id: userInfo.bookmark.id}})
        .subscribe({ next: newItem => { 
          setUserInfo({...userInfo, bookmark: newItem.value.data.onBookmarksChanged});
          }
        });
    }
    userInfo && afterChange();

    return () => {
      sub && sub.unsubscribe();
    }
  }, [userInfo, setUserInfo]);

  useEffect(() => {
    async function init_like() {
        let idx = getIdx(userInfo, url);
        if (idx < 0) setFlag(false);
        else setFlag(true);
    }
    url && userInfo && init_like();
    
  }, [url, userInfo]);

  const likeClick = async (e) => {
    e.stopPropagation();
    if (!userInfo) {
      return;
    }
    let new_flag = !flag;
    if (new_flag)   // like
    {
      let idx = getIdx(userInfo, url);
      if (idx < 0)   // no "url" in bookmarkList
      {
        await API.graphql({query: addArticleToBookmarks,
            variables: {input: { id: userInfo.bookmark.id, article: url}}});

      }
    } 
    else            // dislike
    {
      let idx = getIdx(userInfo, url);
      (idx > -1) && await API.graphql({query: removeArticleFromBookmarks,
        variables: {input: { id: userInfo.bookmark.id, articleIndex: idx}}});
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
