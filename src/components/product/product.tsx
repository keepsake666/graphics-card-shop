import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export const Product = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.textContainer}>
          <img
            className={styles.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckDABz4NqMRvOKyWodzRhwtUM6f78SlFjqKFFmnfNvw&s"
            alt=""
          />
          <p className={styles.text}>asus</p>
          <p className={styles.text}>
            ROG-STRIX-GeForce-RTX- 3090-GUNDAM-EDITION
          </p>
          <p className={styles.text}>19.5 Gbps</p>
          <p className={styles.text}>1890 MHz</p>
          <p className={styles.text}>price</p>
        </div>
        {isMenuOpen && (
          <ul className={classNames("list", "m-0", "p-0", styles.list)}>
            <li className={styles.item}>Магазин</li>
            <li className={styles.item}>Название</li>
            <li className={styles.item}>146 999 ₽</li>
            <li className={styles.item}>button</li>
          </ul>
        )}
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className={isMenuOpen ? styles.buttonActive : styles.button}
          type="button"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
