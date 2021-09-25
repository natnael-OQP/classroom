import React from 'react';
import { useSelector } from 'react-redux';
import Login from './component/Login/login';
import GlobalStyle from './globalstyle'
// Chat page
import Chat from './pages/chat';
import { selectUser } from './redux/userslice';
// firebase



function App() {
  const user = useSelector(selectUser)
  return (
    <>
      <GlobalStyle />
      {
        user ? (
            <Chat />
          ) : (
            <Login/>
          )
      }
    </>
  );
}

export default App;
