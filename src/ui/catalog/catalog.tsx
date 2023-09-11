import classNames from "classnames";
import styles from "./styles.module.css";

interface ICatalog {
  extClassName?: string;
  onClick?: () => void;
}
export const Catalog = ({ extClassName, onClick }: ICatalog) => {
  return (
    <div className={classNames(extClassName, styles.catalog)}>
      <button
        type="button"
        onClick={onClick}
        className={classNames(styles.button, "text")}
      >
        Каталог
      </button>
      <ul className={classNames(styles.list, "list")}>
        <li className={styles.item}>Компьютеры и ноутбуки</li>
        <li className={styles.item}>Смартфоны и гаджеты</li>
        <li className={styles.item}>Телевизоры и цифровое ТВ</li>
        <li className={styles.item}>Техника для дома</li>
      </ul>
    </div>
  );
};
