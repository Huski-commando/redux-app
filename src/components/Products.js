import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch("http://fakestoreapi.com/products");
  //     const data = await res.json();
  //     // console.log(data);
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const cartHandler = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => cartHandler(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
