import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_NUKERbJuDYI1nLIG58IB5LBq00fTAsAwIs";
  const onToken = (token) => {
    console.log(token);
    alert("Betaling gelukt");
  };
  return (
    <StripeCheckout
      label="Betaal nu"
      name="The E-shop"
      currency="EUR"
      billingAddress
      shippingAddress
      image="https://i.postimg.cc/J0mHxVLv/android-chrome-512x512-1.png"
      description={`Het totale bedrag is € ${price}`}
      amount={priceForStripe}
      panelLabel="Betaal nu"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
