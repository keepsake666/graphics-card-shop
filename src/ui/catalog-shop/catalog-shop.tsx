import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../botton/button";

export interface IShop {
  id: number;
  name: string;
  model: string;
  price: string | number;
  link: string;
}
export const CatalogShop = ({ id, name, model, price, link }: IShop) => {
  return (
    <ul key={id} className={classNames("list", "m-0", "p-0", styles.list)}>
      <li className={styles.item}>{name}</li>
      <li className={styles.item}>{model}</li>
      <li className={styles.item}>{price} ₽</li>
      <li className={styles.item}>
        <a className={styles.link} href={link} target="_blank" rel="noreferrer">
          <Button text="Перейти в магазин" size="large" />
        </a>
      </li>
    </ul>
  );
};
