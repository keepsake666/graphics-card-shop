import { useState } from "react";
import { Header } from "../../ui/header/header";
import { Button } from "../../ui/botton/button";
import { Like } from "../../ui/icon/like";
import { Input } from "../../ui/input/input";
import { Catalog } from "../../ui/catalog/catalog";
import { Footer } from "../../ui/footer/footer";
import { Menu } from "../../ui/menu/menu";
import styles from "./styles.module.css";
import { ContainerCategories } from "../../ui/container-categories/container-categories";
import { Characteristics } from "../../ui/characteristics/characteristics";
import { Product } from "../product/product";

function App() {
  const [value, setValue] = useState("");
  const [footerInput, setFooterInput] = useState("");
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
  const fakeProducts = [
    {
      id: 1,
      img: "img1.jpg",
      company: "Apple",
      name: "iPhone 12",
      memory: "128GB",
      price: 999,
      shop: [
        {
          id: 1,
          name: "Shop A",
          model: "Model A",
          price: 999,
          link: "shopA.com",
        },
        {
          id: 2,
          name: "Shop B",
          model: "Model B",
          price: 899,
          link: "shopB.com",
        },
      ],
    },
    {
      id: 2,
      img: "img2.jpg",
      company: "Samsung",
      name: "Galaxy S20",
      memory: "256GB",
      price: "1099",
      shop: [
        {
          id: 3,
          name: "Shop C",
          model: "Model C",
          price: "1099",
          link: "shopC.com",
        },
        {
          id: 4,
          name: "Shop D",
          model: "Model D",
          price: "999",
          link: "shopD.com",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <Button text={<Like />} size="icon" />
      <Input
        value={value}
        name="Name"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск товара"
      />
      <Catalog />
      <Characteristics />
      {fakeProducts.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          img={item.img}
          company={item.company}
          name={item.name}
          memory={item.memory}
          price={item.price}
          shop={item.shop}
        />
      ))}
      <div className={styles.container}>
        <Menu categoriest={items} />
        <ContainerCategories categories={product} />
      </div>
      <Footer
        textButton="Найти"
        onChange={(e) => setFooterInput(e.target.value)}
        value={footerInput}
      />
    </div>
  );
}

export default App;
