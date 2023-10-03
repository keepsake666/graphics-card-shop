import classNames from "classnames";
import styles from "./styles.module.css";
import { ICategoriest } from "../../types/categories";

interface ICategoriesProps {
  extClassName?: string;
  categories: ICategoriest[];
  name: string;
}
export const Categories = ({
  extClassName,
  categories,
  name,
}: ICategoriesProps) => {
  return (
    <li className={classNames(styles.container, extClassName)}>
      <h3 className={styles.name}> {name}</h3>
      <ul className={classNames("list", "m-0", "p-0", styles.list)}>
        {categories.map((item) => (
          <li className={styles.item} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </li>
  );
};
