import classes from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { Button, ThemeButton } from "shared/ui/Button/Button";

import { useTranslation } from "react-i18next";

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames(classes.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t("язык")}
    </Button>
  );
};
