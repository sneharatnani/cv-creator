import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.change}>{this.props.btnTxt}</button>
      </div>
    );
  }
}

export default Button;
