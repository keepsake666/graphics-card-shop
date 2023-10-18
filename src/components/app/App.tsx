import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../../ui/header/header";
import { Footer } from "../../ui/footer/footer";
import { HomePage } from "../../pages/home-page/homePage";
import { ProductsPage } from "../../pages/products-page/productsPage";
import ErrorPage from "../../pages/error-page/error-page";

function App() {
  const [footerInput, setFooterInput] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    </div>
  );
}

export default App;
