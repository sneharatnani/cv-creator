import { Component } from "react";
import PersonalInfo from "./PersonalInfo.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Button from "./utility/Button.js";
import Preview from "./Preview.js";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPreview: false,
      previewInfo: {
        name: "",
        email: "",
        phone: "",
        uniName: "",
        degree: "",
        stdStart: "",
        stdEnd: "",
        company: "",
        position: "",
        jobStart: "",
        jobEnd: "",
      },
    };
  }

  change = (e) => {
    e.preventDefault();
    console.log("hi");
    this.setState((prevState) => ({
      showPreview: true,
    }));
  };

  showForm() {
    return (
      <form>
        <PersonalInfo />
        <Education />
        <Experience />
        <Button btnTxt="submit" onClick={this.change} />
      </form>
    );
  }

  render() {
    return (
      <main>
        {this.state.showPreview ? (
          <Preview />
        ) : (
          <form>
            <PersonalInfo />
            <Education />
            <Experience />
            <Button btnTxt="submit" change={this.change} />
          </form>
        )}
      </main>
    );
  }
}

export default Main;
