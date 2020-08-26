import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";
import CartItem from "../../components/cart-item/cart-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Beschrijving</span>
      </div>
      <div className="header-block">
        <span>Aantal</span>
      </div>
      <div className="header-block">
        <span>Prijs</span>
      </div>
      <div className="header-block">
        <span>Verwijder</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={CartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Totaal: € {total.toFixed(2)}</span>
    </div>
    <div className="test-warning">
      * Dit is een test site *
      <br />
      * Gebruik de volgende creditcard gegevens voor betaling *
      <br />
      4242 4242 4242 4242 - vervaldatum: 01/23 - CVC: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
