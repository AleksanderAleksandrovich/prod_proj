import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return <div>{t("о нас")}</div>;
};

export default About;
