import classNames from "classnames";
import styles from "./styles.module.css";

interface ICategoriest {
  name: string;
  id: number;
}
interface ICategoriesProps {
  extClassName?: string;
  categoriest: ICategoriest[];
  name: string;
}
export const Categories = ({
  extClassName,
  categoriest,
  name,
}: ICategoriesProps) => {
  return (
    <div className={classNames(styles.container, extClassName)}>
      <h3 className={styles.name}> {name}</h3>
      <ul className={classNames("list", "m-0", "p-0", styles.list)}>
        {categoriest.map((item) => (
          <li className={styles.item} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
