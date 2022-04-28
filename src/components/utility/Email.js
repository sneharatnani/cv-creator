import { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@gmail.com"
        />
      </div>
    );
  }
}

export default Email;
