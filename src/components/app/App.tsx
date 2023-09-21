import { useState } from "react";
import { Header } from "../../ui/header/header";
import { Button } from "../../ui/botton/button";
import { Like } from "../../ui/icon/like";
import { Input } from "../../ui/input/input";
import { Catalog } from "../../ui/catalog/catalog";
import { Footer } from "../../ui/footer/footer";

function App() {
  const [value, setValue] = useState("");
  const [footerInput, setFooterInput] = useState("");
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
      <Footer
        textButton="Найти"
        onChange={(e) => setFooterInput(e.target.value)}
        value={footerInput}
        name="Footer"
        placeholder="Поиск товара"
      />
    </div>
  );
}

export default App;
