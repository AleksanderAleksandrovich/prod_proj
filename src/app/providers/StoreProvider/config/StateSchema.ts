import { LoginSchema } from "features/AuthByUsername";

import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
  login: LoginSchema;
};
