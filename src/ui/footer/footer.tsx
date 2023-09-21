import classNames from "classnames";
import React from "react";
import { Logo } from "../logo/logo";
import styles from "./styles.module.css";
import { Input } from "../input/input";
import { Button } from "../botton/button";

export interface IFooterProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extClassName?: string;
  textButton?: string;
  placeholder?: string;
}
export const Footer = ({
  value,
  name,
  onChange,
  extClassName,
  textButton,
  placeholder,
}: IFooterProps) => {
  return (
    <footer className={classNames(styles.footer, extClassName)}>
      <Logo />
      <ul>
        <li>Покупателям</li>
        <li>Как выбрать товар</li>
        <li>Обратная связь</li>
      </ul>
      <ul>
        <li>Сотрудничество</li>
        <li>Подключение магазина</li>
        <li>Подключение магазина</li>
      </ul>
      <div>
        <Input
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
        <Button text={textButton} />
      </div>
    </footer>
  );
};
