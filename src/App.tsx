import "./App.css";
import { Header } from "./ui/header/header";
import { Button } from "./ui/botton/button";
import { Like } from "./ui/icon/like";

function App() {
  return (
    <div>
      <Header />
      <Button text={<Like />} size="icon" />
    </div>
  );
}

export default App;
