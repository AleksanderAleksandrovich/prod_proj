import classes from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";

type LoginModalProps = {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames(classes.LoginModal, {}, [className])}
      isOpen={isOpen}
      lazy
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
