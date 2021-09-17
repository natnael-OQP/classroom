import React from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from './globalstyle'
// Chat page
import Chat from './pages/chat';
import { selectUser } from './redux/userslice';



function App() {
  const user = useSelector(selectUser)
  return (
    <>
      <GlobalStyle />
      {
        user ? (
            <Chat />
          ) : (
            <h1>login</h1>
          )
      }
    </>
  );
}

export default App;
