import { Component } from "react";
import TextInput from "./utility/TextInput.js";
import Email from "./utility/Email.js";
import Phone from "./utility/Phone.js";

class GeneralInfo extends Component {
  render() {
    return (
      <section>
        <h2>Personal Information</h2>
        {/* name */}
        <TextInput
          attributeText="name"
          labelText="full name"
          placeholderTxt="Sara Robinson"
        />
        <Email />
        <Phone />
      </section>
    );
  }
}

export default GeneralInfo;
