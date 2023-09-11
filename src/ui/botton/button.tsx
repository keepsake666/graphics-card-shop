import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extClassName?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large" | "extraLarge" | "big" | "icon";
  text?: string | ReactNode;
}

export const Button = ({
  extClassName,
  text,
  size = "medium",
  ...props
}: IButtonProps) => (
  <button
    type="button"
    {...props}
    className={classNames(
      styles.button,
      styles[`button--${size}`],
      extClassName,
      "text"
    )}
  >
    {text}
  </button>
);
