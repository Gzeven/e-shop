import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/e-shop.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        WINKEL
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option sign-out" onClick={() => auth.signOut()}>
          UITLOGGEN
        </div>
      ) : (
        <Link className="option" to="/signin">
          INLOGGEN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
