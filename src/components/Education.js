import { Component } from "react";

class Education extends Component {
  render() {
    const { handleUni, changeDegree, handleStdStart, handleStdEnd } =
      this.props;
    const { uniName, degree, stdStart, stdEnd } = this.props.value;
    return (
      <section>
        <h2>Education</h2>
        {/* university */}
        <div>
          <label htmlFor="collage">university/collage name</label>
          <input
            type="text"
            id="collage"
            name="collage"
            placeholder="school/collage/university"
            value={uniName}
            onChange={handleUni}
          />
        </div>

        {/* degree */}
        <div>
          <label htmlFor="degree">degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="enter degree name"
            value={degree}
            onChange={changeDegree}
          />
        </div>

        {/* std start */}
        <div>
          <label htmlFor="eduStarted">from</label>
          <input
            type="date"
            id="eduStarted"
            name="eduStarted"
            value={stdStart}
            onChange={handleStdStart}
          />
        </div>

        {/* std end */}
        <div>
          <label htmlFor="eduFinished">to</label>
          <input
            type="date"
            id="eduFinished"
            name="eduFinished"
            value={stdEnd}
            onChange={handleStdEnd}
          />
        </div>
      </section>
    );
  }
}

export default Education;
