import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Logo } from "../logo/logo";
import { Location } from "../icon/location";
import { Heart } from "../icon/heart";
import { Persona } from "../icon/persona";

export interface IHeaderProps {
  extClassName?: string;
}

export const Header = ({ extClassName }: IHeaderProps) => {
  return (
    <header className={classNames(styles.header, extClassName)}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={classNames(styles.list, "m-0", "p-0")}>
        <Link to="products">
          <li className={styles.list__item}>
            {" "}
            <Location />
            <p className={classNames("text", "m-0", "p-0")}>Якутск</p>
          </li>
        </Link>
        <li className={styles.list__item}>
          {" "}
          <Heart />
          <p className={classNames("text", "m-0", "p-0")}>Избранное</p>
        </li>
        <li className={styles.list__item}>
          {" "}
          <Persona />
          <p className={classNames("text", "m-0", "p-0")}>Личный кабинет </p>
        </li>
      </ul>
    </header>
  );
};
