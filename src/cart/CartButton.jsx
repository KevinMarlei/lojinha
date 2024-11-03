import React from "react";

function CartButton({ item, handleAddToCart }) {
  return (
    <div className="cartButtonBox">
      <button className="addButton w-full bg-slate-100 hover:bg-slate-300 font-bold py-2 px-4 rounded-lg " onClick={() => handleAddToCart(item)}>
        Adicionar
      </button>
    </div>
  );
}

export default CartButton;
