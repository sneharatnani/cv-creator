import { Component } from "react";

class Phone extends Component {
  render() {
    return (
      <div>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" name="phone" placeholder="1234567890" />
      </div>
    );
  }
}

export default Phone;
