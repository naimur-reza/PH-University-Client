import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  user: null;
  token: string | null;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },

    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  initialState,
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
