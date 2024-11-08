import React, { useEffect, useState } from "react";
import api from "../fetch/fetchApi";
import ItensCard from "../itensCard/ItensCard";

function Home({ isDarkMode }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [nextId, setNextId] = useState(0); // Estado para o próximo ID

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await api("random");
      setProducts(result);
    };
    fetchProducts();
  }, []);

  const searchItem = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    const result = await api(search);
    setProducts(result);
    setSearch("");
  };

  const generateUniqueId = () => {
    let newId = nextId;
    const existingCart = localStorage.getItem("carrinho");
    const cartItems = existingCart ? JSON.parse(existingCart) : [];

    // Verifica se o ID já existe no carrinho fora do loop
    const isDuplicateId = (id) => cartItems.some((item) => item.id === id);

    // Incrementa até encontrar um ID único
    while (isDuplicateId(newId)) {
      newId += 1;
    }

    return newId;
  };

  const handleAddToCart = (item) => {
    const existingCart = localStorage.getItem("carrinho");
    const cartItems = existingCart ? JSON.parse(existingCart) : [];
    const uniqueId = generateUniqueId(); // Gera um ID único
    const newItem = { ...item, id: uniqueId };
    const updateCart = [...cartItems, newItem];
    setCart(updateCart);
    localStorage.setItem("carrinho", JSON.stringify(updateCart));
    setNextId(nextId + 1); // Atualiza o próximo ID
    console.log("Cart:", updateCart);
    console.log("useState cart", cart);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 " : "bg-neutral-200"
      } flex justify-center items-center`}
    >
      <div
        className={`mainBox ${isDarkMode ? "bg-gray-700" : "bg-white"} p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 my-3`}
      >
        <form onSubmit={searchItem} className="mb-4">
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </form>
        <div className={`anuncios ${isDarkMode ? "bg-slate-500" : ""} grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
          {products.map((item, index) => (
            <div
              key={index}
              className={index >= products.length - 2 ? "hidden" : ""}
            >
              <ItensCard
                thumbnail={item.thumbnail}
                price={item.price}
                title={item.title}
                condition={item.condition}
                permalink={item.permalink}
                handleAddToCart={handleAddToCart}
                isDarkMode={isDarkMode}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
