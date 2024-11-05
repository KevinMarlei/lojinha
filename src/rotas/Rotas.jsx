import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import Home from "../home/Home";
import Cart from "../cart/Cart";

function Caminho() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para o tema

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre claro e escuro
  };

  return (
    <Router basename="/lojinha">
      <div>
        <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/cart" element={<Cart isDarkMode={isDarkMode} />} />
        </Routes>
        <footer className="w-full bg-gray-800 text-white fixed bottom-0 flex flex-col items-center text-center">
          <div>
            <p>&copy; 2024 Lojinha. All rights reserved.</p>
            <p>Developed by Kevin Marlei</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default Caminho;
