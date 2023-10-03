import classNames from "classnames";
import styles from "./styles.module.css";
import { ICategoriest } from "../../types/categories";
import { Categories } from "../categories/categories";

interface IContainerCategories {
  id: number;
  name: string;
  categories: ICategoriest[];
}
interface IContainerCategoriesProps {
  extClassName?: string;
  categories: IContainerCategories[];
}
export const ContainerCategories = ({
  extClassName,
  categories,
}: IContainerCategoriesProps) => {
  return (
    <ul
      className={classNames(
        styles.container,
        "list",
        "m-0",
        "p-0",
        extClassName
      )}
    >
      {categories.map((item) => (
        <Categories
          key={item.id}
          categories={item.categories}
          name={item.name}
        />
      ))}
    </ul>
  );
};
