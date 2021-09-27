import {  createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState : {
    setUser:null,
  },
  reducers: {
    login: (state,action) => {
      state.setUser = action.payload;
    },
    logout: (state) => {
      state.setUser = null ;
    },
    
  },

});

export const { login, logout } = userSlice.actions;


export const selectUser = (state) => state.user.setUser;



export default userSlice.reducer;
