import { useState } from "react";
import { Header } from "../../ui/header/header";
import { Button } from "../../ui/botton/button";
import { Like } from "../../ui/icon/like";
import { Input } from "../../ui/input/input";
import { Catalog } from "../../ui/catalog/catalog";
import { Footer } from "../../ui/footer/footer";
import { Menu } from "../../ui/menu/menu";
import { Categories } from "../../ui/categories/categories";
import styles from "./styles.module.css";

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
      <div className={styles.container}>
        <Menu categoriest={items} />
        <Categories
          name="Ноутбуки
и аксессуары"
          categoriest={items}
        />
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
