import { useTranslation } from "react-i18next";
import classes from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      {t("страница не найдена")}
    </div>
  );
};
