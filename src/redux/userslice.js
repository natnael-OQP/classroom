import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: 0,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    logIn: (state,action) => {
      state.user = action.payload ;
    },
    logOut: (state) => {
      state.user = null ;
    },
    
  },

});

export const { logIn, logOut } = userSlice.actions;


export const selectUser = (state) => state.user.value;



export default userSlice.reducer;
