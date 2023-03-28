import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { useState } from "react";

import Footer from "@/components/Footer";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product1 from "@/components/categorys/Product1";
import Product2 from "@/components/categorys/Product2";
import Product3 from "@/components/categorys/Product3";
import Product4 from "@/components/categorys/Product4";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Product1 />} />
            <Route path="/product2" element={<Product2 />} />
            <Route path="/product3" element={<Product3 />} />
            <Route path="/product4" element={<Product4 />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </main>
    </div>
  );
}

export default App;
