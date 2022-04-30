import { Component } from "react";

class Education extends Component {
  render() {
    const { handleInput } = this.props;
    const { uniName, degree, stdStart, stdEnd } = this.props.value;

    return (
      <section className="section">
        <h2 className="form-heading">Education</h2>
        {/* university */}
        <div className="container">
          <label htmlFor="collage">university/collage name</label>
          <input
            type="text"
            id="collage"
            name="collage"
            placeholder="School/Collage/University"
            value={uniName}
            onChange={handleInput}
          />
        </div>

        {/* degree */}
        <div className="container">
          <label htmlFor="degree">degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Enter degree name"
            value={degree}
            onChange={handleInput}
          />
        </div>

        {/* std start */}
        <div className="container">
          <label htmlFor="eduStarted">from</label>
          <input
            type="date"
            id="eduStarted"
            name="eduStarted"
            value={stdStart}
            onChange={handleInput}
          />
        </div>

        {/* std end */}
        <div className="container">
          <label htmlFor="eduFinished">to</label>
          <input
            type="date"
            id="eduFinished"
            name="eduFinished"
            value={stdEnd}
            onChange={handleInput}
          />
        </div>
      </section>
    );
  }
}

export default Education;
