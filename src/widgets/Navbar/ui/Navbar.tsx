import { useTranslation } from "react-i18next";
import classes from "./Navbar.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

import { LoginModal } from "features/AuthByUsername";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
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
