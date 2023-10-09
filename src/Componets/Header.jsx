import React, { useState, useEffect } from "react";
import Product from "./Product";

function Header() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div className=" md:mx-10  mx-auto py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 ">
        {filteredProducts.map((item) => (
          <Product data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Header;
