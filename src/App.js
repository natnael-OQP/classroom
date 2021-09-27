import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './component/Login/login';
import GlobalStyle from './globalstyle'
// Chat page
import Chat from './pages/chat';
// login and logout
import { login, logout, selectUser } from './redux/userslice';
// auth from firebase
import {auth} from './firebasesetup/firebase'


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user login
        dispatch(login({
          uid : authUser.uid,
          displayName : authUser.displayName,
          email: authUser.email,
          photo: authUser.photoURL,
        }))
      } else {
        // user log out
        dispatch(logout)
      }
    })
  },[]);

  return (
    <>
      <GlobalStyle />
      {
        user ? <Chat /> : <Login />
      }
    </>
  );
}

export default App;
