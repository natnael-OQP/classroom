import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userslice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
