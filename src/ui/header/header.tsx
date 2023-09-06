import styles from "./styles.module.css";
import { Logo } from "../logo/logo";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <ul className={styles.list}>
        <li className={styles.list__item}>
          {" "}
          <div>icon</div>
          <p>Якутск</p>
        </li>
        <li className={styles.list__item}>
          {" "}
          <div>icon</div>
          <p>Избранное</p>
        </li>
        <li className={styles.list__item}>
          {" "}
          <div>icon</div>
          <p>Личный кабинет </p>
        </li>
      </ul>
    </div>
  );
};
