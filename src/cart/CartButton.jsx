import React from "react";

function CartButton({ item, handleAddToCart, isDarkMode }) {
  return (
    <div className="cartButtonBox">
      <button
        className={`addButton w-full ${
          isDarkMode
            ? "bg-gray-600 text-white hover:bg-gray-900"
            : "bg-neutral-300 text-black hover:bg-neutral-400"
        } font-bold py-2 px-4 rounded-lg `}
        onClick={() => handleAddToCart(item)}
      >
        Adicionar
      </button>
    </div>
  );
}

export default CartButton;
