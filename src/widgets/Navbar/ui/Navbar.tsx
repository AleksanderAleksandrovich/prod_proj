import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import classes from "./Navbar.module.scss";

import { useTypedDispatch } from "app/providers/StoreProvider";

import { LoginModal } from "features/AuthByUsername";

import { getUserAuthData, userActions } from "entities/User";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useTypedDispatch();
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <Button
          className={classNames(classes.links)}
          onClick={onLogOut}
          theme={ButtonTheme.CLEAR_INVERTED}
          // eslint-disable-next-line i18next/no-literal-string
        >
          Выйти
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        className={classNames(classes.links)}
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t("войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
