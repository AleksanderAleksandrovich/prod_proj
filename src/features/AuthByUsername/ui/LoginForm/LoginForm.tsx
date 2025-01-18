import { Button } from "shared/ui/Button/Button";
import classes from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";

type LoginFormProps = {
  className?: string;
};

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (value: string) => {
    setUsername(value);
  };
  const passwordHandler = (value: string) => {
    setPassword(value);
  };
  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
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
      <Button className={classes.loginButton}>{t("войти")}</Button>
    </div>
  );
};
