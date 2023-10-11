import classNames from "classnames";
import styles from "./styles.module.css";
import { Fillter } from "../icon/fillter";

export const Characteristics = () => {
  return (
    <ul className={classNames(styles.list, "list", "m-0", "p-0")}>
      <li className={styles.item}>Company</li>
      <li className={styles.item}>Model</li>
      <li className={styles.item}>Model</li>
      <li className={styles.item}>Memory</li>
      <li className={classNames(styles.item, styles.price)}>
        <Fillter className={styles.svg} /> Price{" "}
      </li>
    </ul>
  );
};
