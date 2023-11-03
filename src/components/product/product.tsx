import React, { useState } from "react";
import styles from "./styles.module.css";
import { CatalogShop, IShop } from "../../ui/catalog-shop/catalog-shop";

interface IProduct {
  id: number;
  img: string;
  company: string;
  name: string;
  memory: string;
  price: string | number;
  shop: IShop[];
  onClick: () => void;
}
export const Product = ({
  id,
  img,
  company,
  name,
  memory,
  price,
  shop,
  onClick,
}: IProduct) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div key={id} className={styles.container}>
      <div>
        <div className={styles.textContainer}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img onClick={onClick} className={styles.img} src={img} alt="" />
          <p className={styles.text}>{company}</p>
          <p className={styles.text}>{name}</p>
          <p className={styles.text}>{memory}</p>
          <p className={styles.text}>{price}</p>
          <p className={styles.text}>{price}</p>
        </div>
        {isMenuOpen && (
          <>
            {shop.map((item) => (
              <CatalogShop
                key={item.id}
                id={item.id}
                name={item.name}
                model={item.model}
                price={item.price}
                link={item.link}
              />
            ))}
          </>
        )}
      </div>
      <div className={styles.containerButton}>
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
