import { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { previewInfo } = this.props;
    return (
      <div>
        <section>
          <h2>Personal Information</h2>

          <h3>name</h3>
          <p>{previewInfo.name}</p>

          <h3>email</h3>
          <p>{previewInfo.email}</p>

          <h3>phone</h3>
          <p>{previewInfo.phone}</p>
        </section>

        <section>
          <h2>Education</h2>
          <h3>uniName</h3>
          <p>{previewInfo.uniName}</p>

          <h3>degree</h3>
          <p>{previewInfo.degree}</p>

          <h3>from</h3>
          <p>{previewInfo.stdStart}</p>

          <h3>to</h3>
          <p>{previewInfo.stdEnd}</p>

          <section>
            <h2>job Experience</h2>
            <h3>company</h3>
            <p>{previewInfo.company}</p>

            <h3>position</h3>
            <p>{previewInfo.position}</p>

            <h3>from</h3>
            <p>{previewInfo.jobStart}</p>

            <h3>to</h3>
            <p>{previewInfo.jobEnd}</p>

            <h3>job description</h3>
            <p>{previewInfo.desc}</p>
          </section>
        </section>
      </div>
    );
  }
}

export default Preview;
