import { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      email,
      phone,
      uniName,
      degree,
      stdStart,
      stdEnd,
      company,
      position,
      jobStart,
      jobEnd,
    } = this.props;
    return (
      <div>
        <section>
          <h2>Personal Information</h2>

          <h3>name</h3>
          <p>{name}</p>

          <h3>email</h3>
          <p>{email}</p>

          <h3>phone</h3>
          <p>{phone}</p>
        </section>

        <section>
          <h2>Education</h2>
          <h3>uniName</h3>
          <p>{uniName}</p>

          <h3>degree</h3>
          <p>{degree}</p>

          <h3>from</h3>
          <p>{stdStart}</p>

          <h3>to</h3>
          <p>{stdEnd}</p>

          <section>
            <h2>job Experience</h2>
            <h3>company</h3>
            <p>{company}</p>

            <h3>position</h3>
            <p>{position}</p>

            <h3>from</h3>
            <p>{jobStart}</p>

            <h3>to</h3>
            <p>{jobEnd}</p>
          </section>
        </section>
      </div>
    );
  }
}

export default Preview;
