import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Ik heb al een account</h2>
        <span>Log in met je email en wachtwoord</span>
        <form>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="wachtwoord"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Inloggen</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Inloggen met Google
            </CustomButton>
            <CustomButton onClick={signInWithFacebook} isFacebookSignIn>
              Inloggen met Facebook
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
