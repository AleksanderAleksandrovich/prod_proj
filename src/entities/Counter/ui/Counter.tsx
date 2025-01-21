import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { counterActions } from "../models/slice/counterSlice";
import { getCounterValue } from "../models/selectors/getCounterValue/getCounterValue";

import { Button } from "shared/ui/Button/Button";

export const Counter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="counter-val">{counterValue}</h1>
      <Button data-testid="incr-btn" onClick={increment}>
        {t("incr")}
      </Button>
      <Button data-testid="decr-btn" onClick={decrement}>
        {t("decr")}
      </Button>
    </div>
  );
};
