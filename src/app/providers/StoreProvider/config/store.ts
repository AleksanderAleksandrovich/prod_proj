import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { loginReducer } from "features/AuthByUsername";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer,
    login: loginReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
