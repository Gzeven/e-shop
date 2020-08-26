import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  faFacebook,
  faTwitter,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contactpage.styles.scss";

class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = {
      voornaam: "",
      achternaam: "",
      email: "",
      tekst: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { voornaam, achternaam, email, tekst } = this.state;
    return (
      <div className="contact">
        <div className="contact-page">
          <h2 className="title">Neem contact op met ons</h2>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="voornaam"
              value={voornaam}
              onChange={this.handleChange}
              label="Voornaam"
              required
            />
            <FormInput
              type="text"
              name="achternaam"
              value={achternaam}
              onChange={this.handleChange}
              label="Achternaam"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />
            <h1> Bericht</h1>
            <textarea
              id="tekst"
              name="tekst"
              value={tekst}
              onChange={this.handleChange}
              rows="8"
              cols="50"
              label="Bericht"
            ></textarea>
            <CustomButton type="submit">Bericht verzenden</CustomButton>
          </form>
        </div>
        <div className="company-data">
          <h1>Volg ons op sociale media</h1>
          <FontAwesomeIcon className="social-icon" icon={faFacebook} />
          <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          <FontAwesomeIcon className="social-icon" icon={faInstagramSquare} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
