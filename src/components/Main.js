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
      inputValue: {
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
        desc: "",
      },
    };
  }
  // to show and hide the preview
  handleChange = () => {
    this.setState((prevState) => ({
      showPreview: !prevState.showPreview,
    }));
  };

  // change input value
  changeInput = (e) => {
    if (e.target.id === "name") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          name: e.target.value,
        },
      }));
    } else if (e.target.id === "email") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          email: e.target.value,
        },
      }));
    } else if (e.target.id === "phone") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          phone: e.target.value,
        },
      }));
    } else if (e.target.id === "collage") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          uniName: e.target.value,
        },
      }));
    } else if (e.target.id === "degree") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          degree: e.target.value,
        },
      }));
    } else if (e.target.id === "eduStarted") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          stdStart: e.target.value,
        },
      }));
    } else if (e.target.id === "eduFinished") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          stdEnd: e.target.value,
        },
      }));
    } else if (e.target.id === "company") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          company: e.target.value,
        },
      }));
    } else if (e.target.id === "position") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          position: e.target.value,
        },
      }));
    } else if (e.target.id === "jobStarted") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          jobStart: e.target.value,
        },
      }));
    } else if (e.target.id === "jobFinished") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          jobEnd: e.target.value,
        },
      }));
    } else if (e.target.id === "description") {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          desc: e.target.value,
        },
      }));
    }
  };

  showForm() {
    const { inputValue } = this.state;
    return (
      <form className="form">
        <PersonalInfo handleInput={this.changeInput} value={inputValue} />
        <Education handleInput={this.changeInput} value={inputValue} />
        <Experience handleInput={this.changeInput} value={inputValue} />
      </form>
    );
  }

  render() {
    let { showPreview, inputValue } = this.state;
    return (
      <main>
        {showPreview ? <Preview previewInfo={inputValue} /> : this.showForm()}
        <Button
          change={this.handleChange}
          btnTxt={showPreview ? "edit" : "submit"}
        />
      </main>
    );
  }
}

export default Main;
