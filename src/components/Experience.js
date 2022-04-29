import { Component } from "react";

class Experience extends Component {
  render() {
    const { changeComp, changeRole, handleJobStart, handleJobEnd, changeDesc } =
      this.props;
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
            placeholder="enter company name"
            value={company}
            onChange={changeComp}
          />
        </div>

        {/* position */}
        <div className="container">
          <label htmlFor="position">position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="position name"
            value={position}
            onChange={changeRole}
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
            onChange={handleJobStart}
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
            onChange={handleJobEnd}
          />
        </div>

        {/* job description */}
        <div className="container">
          <label htmlFor="description">job description</label>
          <textarea
            id="description"
            name="description"
            placeholder="describe your role"
            value={desc}
            onChange={changeDesc}
          ></textarea>
        </div>
      </section>
    );
  }
}

export default Experience;
