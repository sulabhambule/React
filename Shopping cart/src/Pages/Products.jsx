import React, { useState } from "react";
import Data from "../../data.json";
import Product from "../Components/Product";

const Products = () => {
  const [products, setProducts] = useState(Data.products);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
