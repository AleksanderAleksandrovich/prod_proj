import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation("main");
  return <div>{t("главная страница")}</div>;
};

export default Main;
