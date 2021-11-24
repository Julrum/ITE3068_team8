import React from 'react';
import Profile from '../../atoms/Profile';
import {
  Layout,
  Label,
  LabelLayout,
  ProfileLayout,
} from './ProfileWithLabel.style';

const ProfileWithLabel = ({ name, url }) => {
  return (
    <Layout>
      <ProfileLayout url={url}>
        <Profile url={url} />
      </ProfileLayout>
      <LabelLayout>
        <Label>{name}</Label>
      </LabelLayout>
    </Layout>
  );
};

export default ProfileWithLabel;
