import React from 'react';
import { StyledImg, StyledProfile } from './Profile.style';

const Profile = ({ url }) => {
  return (
    <StyledProfile>
      <StyledImg src={url} alt="Profile" />
    </StyledProfile>
  );
};

export default Profile;
