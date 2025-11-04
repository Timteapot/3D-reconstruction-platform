import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token:sessionStorage.getItem('token') || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem('token', action.payload);
    },
    removeToken: (state) => {
      state.token = null;
      sessionStorage.removeItem('token');
    }
  }
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
