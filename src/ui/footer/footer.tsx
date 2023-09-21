import classNames from "classnames";
import React from "react";
import { Logo } from "../logo/logo";
import styles from "./styles.module.css";
import { Input } from "../input/input";
import { Button } from "../botton/button";

export interface IFooterProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extClassName?: string;
  textButton?: string;
}
export const Footer = ({
  value,
  onChange,
  extClassName,
  textButton,
}: IFooterProps) => {
  return (
    <footer className={classNames(styles.footer, extClassName)}>
      <Logo />
      <ul className={classNames("list", "m-0", "p-0", styles.list)}>
        <li className={classNames(styles.list__item)}>Покупателям</li>
        <li className={classNames(styles.list__item)}>Как выбрать товар</li>
        <li className={classNames(styles.list__item)}>Обратная связь</li>
      </ul>
      <ul className={classNames("list", "m-0", "p-0")}>
        <li className={classNames(styles.list__item)}>Сотрудничество</li>
        <li className={classNames(styles.list__item)}>Подключение магазина</li>
        <li className={classNames(styles.list__item)}>Подключение магазина</li>
      </ul>
      <div className={classNames(styles.container__input)}>
        <Input
          value={value}
          onChange={onChange}
          name="Footer"
          placeholder="Поиск товара"
          extClassName={styles.input}
        />
        <Button text={textButton} size="small" />
      </div>
    </footer>
  );
};
