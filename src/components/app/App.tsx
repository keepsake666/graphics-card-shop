import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../../ui/header/header";
import { Footer } from "../../ui/footer/footer";
import { HomePage } from "../../pages/home-page/homePage";
import { ProductsPage } from "../../pages/products-page/productsPage";
import ErrorPage from "../../pages/error-page/error-page";

function App() {
  const [footerInput, setFooterInput] = useState("");
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer
        textButton="Найти"
        onChange={(e) => setFooterInput(e.target.value)}
        value={footerInput}
      />
    </main>
  );
}

export default App;
