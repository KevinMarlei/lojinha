import React, { useEffect, useState } from "react";
import ItensCart from "./ItensCart";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageCart = localStorage.getItem("carrinho");
    if (storageCart) {
      setCart(JSON.parse(storageCart));
    }
  }, []);

  const removeFunction = (item) => {
    const existingCart = localStorage.getItem("carrinho");
    const cartItems = existingCart ? JSON.parse(existingCart) : [];
    const updateCart = cartItems.filter(cartItem => cartItem.id !== item.id); // Comparar pelo ID
    setCart(updateCart);
    localStorage.setItem("carrinho", JSON.stringify(updateCart));
    console.log("Item removido:", item);
    console.log("Carrinho atualizado:", updateCart);
  };

  return (
    <div className="cartBox bg-gray-200 w-full min-h-screen p-4">
      <span className="block my-6 text-center">
        <h1 className="text-2xl font-bold">Meu Carrinho</h1>
      </span>
      <div className="cartItems grid grid-cols-1 md:grid-cols-2 gap-4">
        {cart && cart.length > 0 ? (
          cart.map((item, index) => (
            item && item.thumbnail ? (
              <div key={item.id} className="cartItem p-4 bg-white rounded-lg shadow-md">
                <ItensCart
                  id={item.id}
                  condition={item.condition}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  title={item.title}
                  permalink={item.permalink}
                  removeFunction={removeFunction}
                />
              </div>
            ) : null
          ))
        ) : (
          <p className="text-center text-gray-600">O carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
