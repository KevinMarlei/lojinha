import React, { useEffect, useState } from "react";
import api from "../fetch/fetchApi";
import ItensCard from "../itensCard/ItensCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

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

  const handleAddToCart = (item) => {
    const existingCart = localStorage.getItem("carrinho");
    const cartItems = existingCart ? JSON.parse(existingCart) : [];
    const updateCart = [...cartItems, item];
    setCart(updateCart);
    localStorage.setItem("carrinho", JSON.stringify(updateCart));
    console.log("Cart:", updateCart);
    console.log("useState cart", cart);
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex justify-center items-center ">
      <div className=" mainBox bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 my-3">
        <form onSubmit={searchItem} className="mb-4">
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </form>
        <div className="anuncios grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <div key={index} className={index >= products.length - 2 ? "hidden" : ""}>
              <ItensCard
                thumbnail={item.thumbnail}
                price={item.price}
                title={item.title}
                condition={item.condition}
                permalink={item.permalink}
                handleAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
