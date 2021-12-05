import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Profile } from '../../../assets/mdi_profile.svg';
import {
  StyledHeaderbar,
  StyledTitle,
  StyledButtonArea,
  StyledLink,
  ProfileBadge,
  StyledBadgeArea,
} from './Headerbar.style';

const Headerbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledHeaderbar>
      <StyledTitle to="/">Daesun</StyledTitle>
      <StyledButtonArea>
        <StyledLink to="/information">선거정보</StyledLink>
        <StyledLink to="/candidates">후보정보</StyledLink>
        <StyledLink to="/news">뉴스</StyledLink>
        <StyledLink to="/poll">여론조사</StyledLink>
      </StyledButtonArea>
      <StyledBadgeArea>
        <ProfileBadge onClick={handleClick}>
          <Profile width="16" height="16" fill="white" />
        </ProfileBadge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>로그인</MenuItem>
          <MenuItem onClick={handleClose}>읽기 목록</MenuItem>
          <MenuItem onClick={handleClose}>로그아웃</MenuItem>
        </Menu>
      </StyledBadgeArea>
    </StyledHeaderbar>
  );
};

export default Headerbar;
