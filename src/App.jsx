import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { useState } from "react";

import Footer from "@/components/Footer";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GreenLine from "@/components/categorys/GreenLine";
import PinkLine from "@/components/categorys/PinkLine";
import BlueLine from "@/components/categorys/BlueLine";
import PurpleLine from "@/components/categorys/PurpleLine";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PinkLine />} />
            <Route path="/producto1" element={<GreenLine />} />
            <Route path="/producto2" element={<BlueLine />} />
            <Route path="/producto3" element={<PurpleLine />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </main>
    </div>
  );
}

export default App;
