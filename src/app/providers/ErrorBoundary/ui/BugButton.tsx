import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

export const BugButton = () => {
  const { t } = useTranslation();

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);
  
  const toggleError = () => {
    setIsError(true);
  };
  return <Button onClick={toggleError}>{t("создать ошибку")}</Button>;
};
