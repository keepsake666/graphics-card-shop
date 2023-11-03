import { useState } from "react";
import styles from "./styles.module.css";
import { Input } from "../../ui/input/input";
import { Button } from "../../ui/botton/button";
import { Catalog } from "../../ui/catalog/catalog";
import { Product } from "../../components/product/product";
import { Characteristics } from "../../ui/characteristics/characteristics";
import Popup from "../../components/popup/popup";

export const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };
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
  const [value, setValue] = useState("");
  return (
    <>
      <Catalog />
      <Popup isOpen={isOpen} onClose={handleClosePopup}>
        <h1>Hello, Popup!</h1>
        <p>This is the content of the popup.</p>
      </Popup>
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
      <div className={styles.containerProducts}>
        <Characteristics />
        {fakeProducts.map((item) => (
          <Product
            onClick={handleOpenPopup}
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
      </div>
    </>
  );
};
