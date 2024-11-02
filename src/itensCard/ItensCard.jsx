import React from "react";

function ItensCard({ condition, thumbnail, price, permalink, title }) {
  return (
    <div className="boxCard p-4 m-4 bg-white shadow-2xl rounded-xl h-[32rem]">
      <div className="boxImage mb-4">
        <a href={permalink} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <img src={thumbnail} alt={title} className="w-[15rem] h-[15rem] object-cover " />
        </a>
      </div>
      <div className="descriptionCard bg-yellow-50 h-2/5 shadow-md">
        <p className="title text-lg font-bold">{title}</p>
        <p className="price text-green-600">
          {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>
        <p>Condição: {condition === "new" ? "Novo" : "Usado"}</p>
      </div>
    </div>
  );
}

export default ItensCard;