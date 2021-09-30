import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userslice';
import chatReducer from '../redux/chatslice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
