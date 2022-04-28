// import './App.css';
import { Component } from "react";
import Header from "./components/Header.js";
import PersonalInfo from "./components/PersonalInfo.js";
import Education from "./components/Education.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <PersonalInfo />
        <Education />
      </div>
    );
  }
}

export default App;
