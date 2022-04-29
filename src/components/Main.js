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

  changeName = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        name: e.target.value,
      },
    }));
  };

  changeEmail = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        email: e.target.value,
      },
    }));
  };

  changePhone = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        phone: e.target.value,
      },
    }));
  };

  changeUni = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        uniName: e.target.value,
      },
    }));
  };

  changeDeg = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        degree: e.target.value,
      },
    }));
  };

  eduStart = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        stdStart: e.target.value,
      },
    }));
  };

  eduEnd = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        stdEnd: e.target.value,
      },
    }));
  };

  changeComp = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        company: e.target.value,
      },
    }));
  };

  changeRole = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        position: e.target.value,
      },
    }));
  };

  handleJobStart = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        jobStart: e.target.value,
      },
    }));
  };

  handleJobEnd = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        jobEnd: e.target.value,
      },
    }));
  };

  changeDesc = (e) => {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        desc: e.target.value,
      },
    }));
  };

  showForm() {
    const { inputValue } = this.state;
    return (
      <form>
        <PersonalInfo
          handleName={this.changeName}
          handleEmail={this.changeEmail}
          handlePhone={this.changePhone}
          value={inputValue}
        />
        <Education
          handleUni={this.changeUni}
          changeDegree={this.changeDeg}
          handleStdStart={this.eduStart}
          handleStdEnd={this.eduEnd}
          value={inputValue}
        />
        <Experience
          changeComp={this.changeComp}
          changeRole={this.changeRole}
          handleJobStart={this.handleJobStart}
          handleJobEnd={this.handleJobEnd}
          changeDesc={this.changeDesc}
          value={inputValue}
        />
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
