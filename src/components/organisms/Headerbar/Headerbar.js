/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { Button } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import Modal from '../../organisms/Modal';
import { ReactComponent as Bookmark } from '../../../assets/bookmark-heart.svg';
import {
  StyledHeaderbar,
  StyledTitle,
  StyledButtonArea,
  StyledLink,
  StyledBadgeArea,
  Aligner,
  ModalBody,
  RightAlignedButton,
  StyledTextField,
} from './Headerbar.style';

const Headerbar = () => {
  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const [RegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [newId, setNewId] = useState('');
  const [newPw, setNewPW] = useState('');
  const [newPw2, setNewPW2] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    let updateUser = async (authState) => {
      try {
        let currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch {
        setUser(null);
      }
    };
    Hub.listen('auth', updateUser);
    updateUser();
    return () => Hub.remove('auth', updateUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async () => {
    try {
      const currentUser = await Auth.signIn(id, pw);

      setUser(currentUser);
      closeLoginModal();
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: newId,
        password: newPw,
        attributes: {
          email: newId,
        },
      });
      closeLoginModal();
      closeRegisterModal();
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const openLoginModal = () => {
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
          {user && (
            <Button
              variant="outlined"
              startIcon={<Bookmark width="25" height="25" fill="#4D4DFF" />}
            >
              읽기목록
            </Button>
          )}
          {user ? (
            <Button onClick={signOut}>로그아웃</Button>
          ) : (
            <>
              <Button variant="outlined" onClick={openRegisterModal}>
                회원가입
              </Button>
              <Button onClick={openLoginModal}>로그인</Button>
            </>
          )}
        </StyledBadgeArea>
      </StyledHeaderbar>
      <Modal
        width="400px"
        open={LoginModalOpen}
        closeModal={closeLoginModal}
        title="로그인"
        headerComponent={
          <Button variant="contained" onClick={() => signIn()}>
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
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <StyledTextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            placeholder="비밀번호를 입력하세요."
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
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
          <Button variant="contained" onClick={() => signUp()}>
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
            onChange={(e) => {
              setNewId(e.target.value);
            }}
          />
          <StyledTextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            placeholder="비밀번호를 입력하세요."
            type="password"
            onChange={(e) => {
              setNewPW(e.target.value);
            }}
          />
          <StyledTextField
            label="비밀번호 재확인"
            variant="outlined"
            fullWidth
            placeholder="비밀번호를 다시 한번 입력하세요."
            type="password"
            onChange={(e) => {
              setNewPW2(e.target.value);
            }}
          />
        </ModalBody>
      </Modal>
    </StylesProvider>
  );
};

export default Headerbar;
