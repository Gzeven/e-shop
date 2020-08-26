import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const prijs = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return (
    <div className="cart-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {prijs}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
