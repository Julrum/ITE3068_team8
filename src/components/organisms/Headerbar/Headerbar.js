import React, { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { Alert, AlertTitle, Button, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
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
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertState, setAlertState] = useState({
    message: '',
    description: '',
    state: 'error',
  });
  const [id, setId] = useState('');
  const [idInvalid, setIdInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [newId, setNewId] = useState('');
  const [newIdInvalid, setNewIdInvalid] = useState(false);
  const [newPw, setNewPW] = useState('');
  const [newPw2, setNewPW2] = useState('');
  const [pw, setPw] = useState('');
  const [pwInvalid, setPwInvalid] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

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
    setLoading(true);
    try {
      const currentUser = await Auth.signIn(id, pw);
      currentUser &&
        setAlertState({
          message: '로그인에 성공하였습니다.',
          description: '',
          state: 'success',
        });
      setUser(currentUser);
      closeLoginModal();
    } catch (error) {
      setAlertState({
        message: '로그인에 실패하였습니다.',
        description: `${error}`,
        state: 'error',
      });
    }
    setLoading(false);
    setAlertOpen(true);
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
      user &&
        setAlertState({
          message: '회원가입이 완료되었습니다.',
          description: '이메일을 확인해주십시오.',
          state: 'success',
        });
      closeLoginModal();
      closeRegisterModal();
    } catch (error) {
      setAlertState({
        message: '회원가입에 실패하였습니다.',
        description: `${error}`,
        state: 'error',
      });
    }
    setAlertOpen(true);
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setAlertState({
        message: '로그아웃에 성공하였습니다.',
        description: '',
        state: 'success',
      });
      setUser(null);
    } catch (error) {
      setAlertState({
        message: '로그아웃에 실패하였습니다.',
        description: `${error}`,
        state: 'error',
      });
    }
    setAlertOpen(true);
  };

  // const openAlert = () => {
  //   setAlertOpen(true);
  // };

  // const closeAlert = () => {
  //   setAlertOpen(true);
  // };

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      signIn();
    }
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
        closeModal={closeLoginModal}
        open={loginModalOpen}
        title="로그인"
        width="400px"
        headerComponent={
          <LoadingButton
            disabled={!id || !pw || !emailReg.test(id)}
            loading={loading}
            onClick={() => signIn()}
            variant="contained"
          >
            로그인하기
          </LoadingButton>
        }
      >
        <ModalBody>
          <StyledTextField
            autoFocus
            error={idInvalid}
            fullWidth
            helperText={idInvalid && '이메일 양식에 맞게 입력해주세요.'}
            label="이메일"
            onBlur={(e) => {
              emailReg.test(id) ? setIdInvalid(false) : setIdInvalid(true);
            }}
            onChange={(e) => {
              setId(e.target.value);
            }}
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder="이메일을 입력하세요."
            required
            type="email"
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="비밀번호"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder="비밀번호를 입력하세요."
            required
            type="password"
            variant="outlined"
          />
          <Aligner onClick={openRegisterModal}>
            <RightAlignedButton>회원가입</RightAlignedButton>
          </Aligner>
        </ModalBody>
      </Modal>
      <Modal
        closeModal={closeRegisterModal}
        open={registerModalOpen}
        title="회원가입"
        width="400px"
        headerComponent={
          <Button
            disabled={!newId || !newPw || !newPw2 || !(newPw === newPw2)}
            onClick={() => signUp()}
            variant="contained"
          >
            회원가입하기
          </Button>
        }
      >
        <ModalBody>
          <StyledTextField
            autoFocus
            error={newIdInvalid}
            fullWidth
            helperText={newIdInvalid && '이메일 양식에 맞게 입력해주세요.'}
            label="이메일"
            onBlur={(e) => {
              emailReg.test(newId)
                ? setNewIdInvalid(false)
                : setNewIdInvalid(true);
            }}
            onChange={(e) => {
              setNewId(e.target.value);
            }}
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder="이메일을 입력하세요."
            required
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="비밀번호"
            onChange={(e) => {
              setNewPW(e.target.value);
            }}
            placeholder="비밀번호를 입력하세요."
            required
            type="password"
            variant="outlined"
          />
          <StyledTextField
            error={pwInvalid}
            fullWidth
            helperText={pwInvalid && '비밀번호가 일치하지 않습니다.'}
            label="비밀번호 재확인"
            onChange={(e) => {
              setNewPW2(e.target.value);
            }}
            onBlur={() => {
              newPw === newPw2 ? setPwInvalid(false) : setPwInvalid(true);
            }}
            placeholder="비밀번호를 다시 한번 입력하세요."
            required
            type="password"
            variant="outlined"
          />
        </ModalBody>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
        open={alertOpen}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity={alertState.state}
          sx={{ width: '100%' }}
          variant="filled"
        >
          <AlertTitle>{alertState.message}</AlertTitle>
          {alertState.description}
        </Alert>
      </Snackbar>
    </StylesProvider>
  );
};

export default Headerbar;
