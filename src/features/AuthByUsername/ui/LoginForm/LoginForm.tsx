import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import classes from "./LoginForm.module.scss";

import { useTypedDispatch } from "app/providers/StoreProvider/lib/useTypedDispatch";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { classNames } from "shared/lib/classNames/classNames";

type LoginFormProps = {
  className?: string;
};

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const usernameHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, []);

  const passwordHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, []);

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [username, password, dispatch]);

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Text title={t("форма авторизации")} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        className={classes.input}
        onChange={usernameHandler}
        placeholder={t("введите логин")}
        type="text"
        value={username}
      />
      <Input
        className={classes.input}
        onChange={passwordHandler}
        placeholder={t("введите пароль")}
        type="text"
        value={password}
      />
      <Button
        className={classes.loginButton}
        disabled={isLoading}
        onClick={onLogin}
        theme={ButtonTheme.OUTLINE}
      >
        {t("войти")}
      </Button>
    </div>
  );
});
