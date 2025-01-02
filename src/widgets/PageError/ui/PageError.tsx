import { useTranslation } from "react-i18next";
import classes from "./PageError.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type PageErrorProps = {
  className?: string;
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onReload = () => {
    location.reload();
  };
  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <p>{t("произошла непредвиденная ошибка")}</p>
      <button onClick={onReload}>{t("перегрузить страницу")}</button>
    </div>
  );
};
