import classNames from "classnames";
import styles from "./styles.module.css";

interface ICategoriest {
  name: string;
  id: number;
}

interface IMenuProps {
  categoriest: ICategoriest[];
}
export const Menu = ({ categoriest }: IMenuProps) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={styles.categories}>
        <ul className={classNames("list", "m-0", "p-0", styles.list)}>
          {categoriest.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div />
    </div>
  );
};
