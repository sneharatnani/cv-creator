import { Component } from "react";

class DateInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributeTxt, labelTxt } = this.props;
    return (
      <div>
        <label htmlFor={attributeTxt}>{labelTxt}</label>
        <input type="date" id={attributeTxt} name={attributeTxt} />
      </div>
    );
  }
}

export default DateInput;
