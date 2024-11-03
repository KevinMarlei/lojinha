// Caminho.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import Home from "../home/Home";
import Cart from "../cart/Cart";

function Caminho() {
  return (
    <Router basename="/lojinha">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <footer className="w-full bg-gray-800 text-white fixed bottom-0 flex flex-col items-center text-center">
        <div>
          <p>&copy; 2024 Lojinha. All rights reserved.</p>
          <p>Developed by Kevin Marlei</p>
        </div>
      </footer>
    </Router>
  );
}

export default Caminho;
