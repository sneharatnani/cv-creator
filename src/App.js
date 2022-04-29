import "./assets/styles.css";
import { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
