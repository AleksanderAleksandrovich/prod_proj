import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserSchema } from "../types/userSchema";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(action.payload)
      );
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logOut: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
