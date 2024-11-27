import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Products/Products.css";

const Products = () => {
  const [productslist, setProductslist] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    const ShowProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProductslist(data);
        setLoading(false);
      } catch (error) {
        console.log("error please check console");
        setLoading(false);
      }
    };
    ShowProducts();
  }, []);

  const categories = [
    ...new Set(productslist.map((product) => product.category)),
  ];

  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Products-card">
      {categories.map((category) => {
        const categoryProductdisplay = productslist.find(
          (product) => product.category === category
        );
        return (
          <div className="all-image" key={category}>
            {categoryProductdisplay && (
              <div className="display-item">
                <img
                  src={categoryProductdisplay.image}
                  alt={categoryProductdisplay.title}
                  style={{ width: "156px", height: "160px" }}
                />
                <div className="title">
                  <h2>{category}</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
