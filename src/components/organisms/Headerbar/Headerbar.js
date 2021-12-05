import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import Modal from '../../organisms/Modal';
import { ReactComponent as Profile } from '../../../assets/mdi_profile.svg';
import {
  StyledHeaderbar,
  StyledTitle,
  StyledButtonArea,
  StyledLink,
  ProfileBadge,
  StyledBadgeArea,
  Aligner,
  ModalBody,
  RightAlignedButton,
  StyledTextField,
} from './Headerbar.style';

const Headerbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const [RegisterModalOpen, setRegisterModalOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openLoginModal = () => {
    handleClose();
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  return (
    <StylesProvider injectFirst>
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
            <MenuItem onClick={openLoginModal}>로그인</MenuItem>
            <MenuItem onClick={handleClose}>읽기 목록</MenuItem>
            <MenuItem onClick={handleClose}>로그아웃</MenuItem>
          </Menu>
        </StyledBadgeArea>
      </StyledHeaderbar>
      <Modal
        width="400px"
        open={LoginModalOpen}
        closeModal={closeLoginModal}
        title="로그인"
        headerComponent={
          <Button variant="contained" onClick={() => console.log('login')}>
            로그인하기
          </Button>
        }
      >
        <ModalBody>
          <StyledTextField
            label="이메일"
            variant="outlined"
            fullWidth
            placeholder="이메일을 입력하세요."
            type="email"
          />
          <StyledTextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            placeholder="비밀번호를 입력하세요."
            type="password"
          />
          <Aligner onClick={openRegisterModal}>
            <RightAlignedButton>회원가입</RightAlignedButton>
          </Aligner>
        </ModalBody>
      </Modal>
      <Modal
        width="400px"
        open={RegisterModalOpen}
        closeModal={closeRegisterModal}
        title="회원가입"
        headerComponent={
          <Button variant="contained" onClick={() => console.log('signup')}>
            회원가입하기
          </Button>
        }
      >
        <ModalBody>
          <StyledTextField
            label="이메일"
            variant="outlined"
            fullWidth
            placeholder="이메일을 입력하세요."
          />
          <StyledTextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            placeholder="비밀번호를 입력하세요."
            type="password"
          />
          <StyledTextField
            label="비밀번호 재확인"
            variant="outlined"
            fullWidth
            placeholder="비밀번호를 다시 한번 입력하세요."
            type="password"
          />
        </ModalBody>
      </Modal>
    </StylesProvider>
  );
};

export default Headerbar;
