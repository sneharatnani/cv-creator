import { Component } from "react";

class Experience extends Component {
  render() {
    const { handleInput } = this.props;
    const { company, position, jobStart, jobEnd, desc } = this.props.value;

    return (
      <section className="section">
        <h2 className="form-heading">Experience</h2>
        {/* company */}
        <div className="container">
          <label htmlFor="company">company name</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter company name"
            value={company}
            onChange={handleInput}
          />
        </div>

        {/* position */}
        <div className="container">
          <label htmlFor="position">position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Position Name"
            value={position}
            onChange={handleInput}
          />
        </div>

        {/* job start */}
        <div className="container">
          <label htmlFor="jobStarted">from</label>
          <input
            type="date"
            id="jobStarted"
            name="jobStarted"
            value={jobStart}
            onChange={handleInput}
          />
        </div>

        {/* job end */}
        <div className="container">
          <label htmlFor="jobFinished">to</label>
          <input
            type="date"
            id="jobFinished"
            name="jobFinished"
            value={jobEnd}
            onChange={handleInput}
          />
        </div>

        {/* job description */}
        <div className="container">
          <label htmlFor="description">job description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your role"
            value={desc}
            onChange={handleInput}
          ></textarea>
        </div>
      </section>
    );
  }
}

export default Experience;
