import { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleName, handleEmail, handlePhone } = this.props;
    const { name, email, phone } = this.props.value;
    return (
      <section>
        <h2>Personal Information</h2>

        {/* name */}
        <div>
          <label htmlFor="name">full name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Sara Robinson"
            value={name}
            onChange={handleName}
          />
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>

        {/* phone */}
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="1234567890"
            value={phone}
            onChange={handlePhone}
          />
        </div>
      </section>
    );
  }
}

export default GeneralInfo;
