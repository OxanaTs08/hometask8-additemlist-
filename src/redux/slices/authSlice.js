import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem('token', action.payload.token);
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
      }
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
