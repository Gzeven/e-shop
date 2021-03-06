import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">
          Er zitten geen artikelen in het Winkelwagentje
        </span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/bestellen");
        dispatch(toggleCartHidden());
      }}
    >
      Bestellen
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
