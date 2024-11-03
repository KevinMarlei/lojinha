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
    </Router>
  );
}

export default Caminho;
