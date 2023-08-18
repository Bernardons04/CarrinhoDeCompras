import React, { useEffect, useState, useContext} from "react";
import ProductCard from "../ProductCard/ProductCard";

import './Products.css'
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";
import Loading from "../Loading/Loading";

function Products() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone')
      .then((response) => {
        setProducts(response);
        setLoading(false)
      });
  }, []);

  return (
    (loading && <Loading /> ) || ( 
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section> 
    )
  );
}

export default Products;