import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import classes from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

type InputProps = HTMLInputProps & {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
};

export const Input = memo(
  ({
    autofocus,
    placeholder,
    className,
    value,
    onChange,
    type,
    ...otherProps
  }: InputProps) => {
    const [isFocus, setIsFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autofocus) {
        setIsFocus(true);
        refInput.current.focus();
      }
    }, [autofocus]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.selectionStart);
      console.log(e.target.value.length);
    };

    const onFocus = () => {
      setIsFocus(true);
    };

    const onBlur = () => {
      setIsFocus(false);
    };

    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCaretPosition(e.target.selectionStart);
      console.log("first");
    };
    return (
      <div className={classNames(classes.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={classes.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={classes.caretWrapper}>
          <input
            className={classes.input}
            onBlur={onBlur}
            onChange={changeHandler}
            onFocus={onFocus}
            onSelect={onSelect}
            ref={refInput}
            type={type}
            value={value}
            {...otherProps}
          />
          {isFocus && (
            <span
              className={classes.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  }
);
