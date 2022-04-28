import { Component } from "react";
import TextInput from "./utility/TextInput.js";
import DateInput from "./utility/Date.js";

class Experience extends Component {
  render() {
    return (
      <section>
        <h2>Experience</h2>
        <TextInput
          attributeText="company"
          labelText="company name"
          placeholderTxt="enter company name"
        />
        <TextInput
          attributeText="position"
          labelText="position"
          placeholderTxt="position name"
        />
        <DateInput attributeText="jobStarted" labelText="from" />
        <DateInput attributeText="jobFinished" labelText="to" />
        {/* job description */}
        <div>
          <label htmlFor="description">job description</label>
          <textarea
            id="description"
            name="description"
            placeholder="describe your role"
          ></textarea>
        </div>
      </section>
    );
  }
}

export default Experience;
