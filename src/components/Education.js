import { Component } from "react";
import TextInput from "./utility/TextInput.js";
import DateInput from "./utility/Date.js";

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
          placeholderTxt="enter degree name"
        />
        <DateInput attributeText="eduStarted" labelText="from" />
        <DateInput attributeText="eduFinished" labelText="to" />
      </section>
    );
  }
}

export default Education;
