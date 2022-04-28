import { Component } from "react";
import TextInput from "./utility/TextInput.js";

class Education extends Component {
  render() {
    return (
      <section>
        <h2>Education</h2>
        <TextInput
          attributeText="collage"
          labelText="university/collage name"
          placeholderTxt="university/collage/school"
        />
        <TextInput
          attributeText="degree"
          labelText="degree"
          placeholderTxt="degree name"
        />
      </section>
    );
  }
}

export default Education;
