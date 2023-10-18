import { useState } from "react";
import { Button } from "../../ui/botton/button";
import { Input } from "../../ui/input/input";
import styles from "./styles.module.css";
import { Catalog } from "../../ui/catalog/catalog";
import { Menu } from "../../ui/menu/menu";
import { ContainerCategories } from "../../ui/container-categories/container-categories";

export const HomePage = () => {
  const items = [
    { id: 1, name: "Товар 1" },
    { id: 2, name: "Товар 2" },
    { id: 3, name: "Товар 3" },
    { id: 4, name: "Товар 4" },
    { id: 5, name: "Товар 5" },
  ];
  const product = [
    {
      id: 1,
      name: "Product 1",
      categories: [
        { id: 1, name: "Ноутбуки-трансформеры" },
        { id: 2, name: "Category 2" },
      ],
    },
    {
      id: 2,
      name: "Product 2",
      categories: [
        { id: 3, name: "Category 3" },
        { id: 4, name: "Category 4" },
      ],
    },
    {
      id: 3,
      name: "Product 3",
      categories: [
        { id: 1, name: "Category 1" },
        { id: 5, name: "Category 5" },
      ],
    },
    {
      id: 4,
      name: "Product 4",
      categories: [
        { id: 2, name: "Category 2" },
        { id: 4, name: "Category 4" },
        { id: 6, name: "Category 6" },
      ],
    },
    {
      id: 5,
      name: "Product 5",
      categories: [
        { id: 3, name: "Category 3" },
        { id: 5, name: "Category 5" },
        { id: 7, name: "Category 7" },
      ],
    },
  ];
  const [value, setValue] = useState("");
  return (
    <>
      <div className={styles.containerInput}>
        <Input
          extClassName={styles.input}
          placeholder="Поиск товара"
          value={value}
          name="product"
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        <Button extClassName={styles.button} text="Найти" size="small" />
      </div>
      <Catalog />
      <div className={styles.container}>
        <Menu categoriest={items} />
        <ContainerCategories categories={product} />
      </div>
    </>
  );
};
