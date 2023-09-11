import "./App.css";
import { useState } from "react";
import { Header } from "./ui/header/header";
import { Button } from "./ui/botton/button";
import { Like } from "./ui/icon/like";
import { Input } from "./ui/input/input";

function App() {
  const [value, setValue] = useState("");
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
    </div>
  );
}

export default App;
