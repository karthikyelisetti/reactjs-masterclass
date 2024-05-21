import React, { useCallback, useEffect, useState } from "react";
// importing custom hook
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  const [url, setUrl] = useState(["http://localhost:8000/products"]);
  
  // using custom hook - useFetch
  const { data: products, loading, error } = useFetch(url, {content: "ABC"});

  //useCallback() is needed only when the function is outside the useEffect()
  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts(data);
  // }, [url])
  
  // useEffect(() => {
  //   fetchProducts();
  //   console.log("-");
  // }, [fetchProducts]);
  
  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
        <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
      </div>

      {/* Using the loading feature */}
      {loading && <p>loading products...</p>}

      {error && <p>{ error }</p>}
      
      {products && products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailable"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
