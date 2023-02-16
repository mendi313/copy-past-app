import { createSlice } from '@reduxjs/toolkit';

export const isLogedInReducer = createSlice({
  name: 'isLogedIn',
  initialState: {
    user: {},
    isLogedIn: false,
  },
  reducers: {
    setLogedInUser: (state, action) => {
      state.user = action.payload;
      state.isLogedIn = true;
    },
    setLogedOutUser: (state, action) => {
      state.user = {};
      state.isLogedIn = false;
    },
  },
});

export const { setLogedInUser,setLogedOutUser } = isLogedInReducer.actions;

export default isLogedInReducer.reducer;
