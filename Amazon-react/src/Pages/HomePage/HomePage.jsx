import React, { useEffect, useState } from "react";
import Cart from "../../Components/Cart/Cart";
import data from '../../data/product.json'

const HomePage = () => {
  const [products, setProducts] = useState(data.products);

  return (
    <div className="products-grid">
      {products.map((product) => (
        <Cart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
