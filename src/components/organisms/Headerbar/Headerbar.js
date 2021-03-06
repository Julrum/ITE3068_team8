import React, { useState, useEffect } from 'react';
import { Auth, Hub, API } from 'aws-amplify';
import { Alert, AlertTitle, Button, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { StylesProvider } from '@mui/styles';
import { Link } from 'react-router-dom';
import Modal from '../../organisms/Modal';
import { ReactComponent as Bookmark } from '../../../assets/bookmark-heart.svg';
import { createUser, createBookmarks } from '../../../graphql/mutations';
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
          message: '???????????? ?????????????????????.',
          description: '',
          state: 'success',
        });
      setUser(currentUser);
      window.location.replace('/');
      closeLoginModal();
    } catch (error) {
      setAlertState({
        message: '???????????? ?????????????????????.',
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
      if (user) {
        setAlertState({
          message: '??????????????? ?????????????????????.',
          description: '???????????? ?????????????????????.',
          state: 'success',
        });

        let bmk = await API.graphql({
          query: createBookmarks,
          variables: { input: { bookmarkList: [] } },
        }).catch((e) => console.log(e));
        await API.graphql({
          query: createUser,
          variables: {
            input: {
              email: newId,
              bookmarkId: bmk.data.createBookmarks.id,
            },
          },
        }).catch((e) => console.log(e));
      }
      closeLoginModal();
      closeRegisterModal();
    } catch (error) {
      setAlertState({
        message: '??????????????? ?????????????????????.',
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
        message: '??????????????? ?????????????????????.',
        description: '',
        state: 'success',
      });
      setUser(null);
      window.location.replace('/');
    } catch (error) {
      setAlertState({
        message: '??????????????? ?????????????????????.',
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
          <StyledLink to="/information">????????????</StyledLink>
          <StyledLink to="/candidates">????????????</StyledLink>
          <StyledLink to="/news">??????</StyledLink>
          <StyledLink to="/poll">????????????</StyledLink>
        </StyledButtonArea>
        <StyledBadgeArea>
          {user && (
            <Button
              component={Link}
              to="/readinglist"
              variant="outlined"
              startIcon={<Bookmark width="25" height="25" fill="#4D4DFF" />}
            >
              ????????????
            </Button>
          )}
          {user ? (
            <Button onClick={signOut}>????????????</Button>
          ) : (
            <>
              <Button variant="outlined" onClick={openRegisterModal}>
                ????????????
              </Button>
              <Button onClick={openLoginModal}>?????????</Button>
            </>
          )}
        </StyledBadgeArea>
      </StyledHeaderbar>
      <Modal
        closeModal={closeLoginModal}
        open={loginModalOpen}
        title="?????????"
        width="400px"
        headerComponent={
          <LoadingButton
            disabled={!id || !pw || !emailReg.test(id)}
            loading={loading}
            onClick={() => signIn()}
            variant="contained"
          >
            ???????????????
          </LoadingButton>
        }
      >
        <ModalBody>
          <StyledTextField
            autoFocus
            error={idInvalid}
            fullWidth
            helperText={idInvalid && '????????? ????????? ?????? ??????????????????.'}
            label="?????????"
            onBlur={(e) => {
              emailReg.test(id) ? setIdInvalid(false) : setIdInvalid(true);
            }}
            onChange={(e) => {
              setId(e.target.value);
            }}
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder="???????????? ???????????????."
            required
            type="email"
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="????????????"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder="??????????????? ???????????????."
            required
            type="password"
            variant="outlined"
          />
          <Aligner onClick={openRegisterModal}>
            <RightAlignedButton>????????????</RightAlignedButton>
          </Aligner>
        </ModalBody>
      </Modal>
      <Modal
        closeModal={closeRegisterModal}
        open={registerModalOpen}
        title="????????????"
        width="400px"
        headerComponent={
          <Button
            disabled={!newId || !newPw || !newPw2 || !(newPw === newPw2)}
            onClick={() => signUp()}
            variant="contained"
          >
            ??????????????????
          </Button>
        }
      >
        <ModalBody>
          <StyledTextField
            autoFocus
            error={newIdInvalid}
            fullWidth
            helperText={newIdInvalid && '????????? ????????? ?????? ??????????????????.'}
            label="?????????"
            onBlur={(e) => {
              emailReg.test(newId)
                ? setNewIdInvalid(false)
                : setNewIdInvalid(true);
            }}
            onChange={(e) => {
              setNewId(e.target.value);
            }}
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder="???????????? ???????????????."
            required
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="????????????"
            onChange={(e) => {
              setNewPW(e.target.value);
            }}
            placeholder="??????????????? ???????????????."
            required
            type="password"
            variant="outlined"
          />
          <StyledTextField
            error={pwInvalid}
            fullWidth
            helperText={pwInvalid && '??????????????? ???????????? ????????????.'}
            label="???????????? ?????????"
            onChange={(e) => {
              setNewPW2(e.target.value);
            }}
            onBlur={() => {
              newPw === newPw2 ? setPwInvalid(false) : setPwInvalid(true);
            }}
            placeholder="??????????????? ?????? ?????? ???????????????."
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
