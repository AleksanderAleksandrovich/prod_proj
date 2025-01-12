import { useTranslation } from "react-i18next";
import classes from "./Navbar.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";

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
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onCloseModal}>
        что то
      </Modal>
    </div>
  );
};
