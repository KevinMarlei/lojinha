import React from "react";
import CartButton from "../cart/CartButton";

function ItensCard({
  condition,
  thumbnail,
  price,
  permalink,
  title,
  handleAddToCart,
  isDarkMode,
}) {
  return (
    <div className={`boxCard p-4 m-4 ${isDarkMode ? "bg-gray-700" : "bg-white"}  shadow-2xl rounded-xl h-[32rem]`}>
      <div className="boxImage mb-4 w-full h-3/6" >
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center h-full w-full"
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-[100%] h-[100%] object-center object-fill"
          />
        </a>
      </div>
      <div className="descriptionCard bg-yellow-50 h-2/5 shadow-md rounded-lg">
        <p className="title text-lg font-bold">{title}</p>
        <p className="price text-green-600">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>Condição: {condition === "new" ? "Novo" : "Usado"}</p>
      </div>
      <CartButton
        item={{ condition, thumbnail, price, permalink, title }}
        handleAddToCart={handleAddToCart}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default ItensCard;
