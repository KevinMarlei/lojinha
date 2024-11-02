import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar() {
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const storageLocal = localStorage.getItem("carrinho");
      if (storageLocal) {
        const contadorValue = JSON.parse(storageLocal);
        setCountCart(contadorValue.length);
      }
    };
    setInterval(updateCount, updateCount());
  }, []);

  return (
    <nav className="w-dvw bg-gray-700 flex justify-center">
      <ul className="w-1/2 flex justify-between items-center bg-slate-300">
        <span className="flex justify-between w-24 ">
          <li className="bg-slate-100 hover:bg-slate-200 font-bold py-2 px-4  ">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-slate-100 hover:bg-slate-200 font-bold py-2 px-4  ">
            <Link to="/cart">Cart</Link>
          </li>
        </span>
        <span className="flex">
          <AiOutlineShoppingCart className="cartWish " />
          <span className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">{countCart}</span>
        </span>
      </ul>
    </nav>
  );
}

export default NavBar;
