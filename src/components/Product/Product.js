import React from "react";
import "./Product.css";
import { FaShoppingCart } from "react-icons/fa";

const product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock}left in stock - Order soon</small>
        </p>
        <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}>
          {" "}
          <FaShoppingCart /> add to cart
        </button>
      </div>
    </div>
  );
};

export default product;
