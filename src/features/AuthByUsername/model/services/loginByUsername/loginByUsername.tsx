import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User, userActions } from "entities/User";

import i18n from "shared/config/i18n/i18n";


type loginByUsernameProps = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (loginData, { dispatch, rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:8000/login", loginData);

    if (!response.data) throw new Error();

    
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue(i18n.t("вы ввели неверный логин или пароль"));
  }
});
