import { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributeText, labelText, placeholderTxt } = this.props;
    return (
      <div>
        <label htmlFor={attributeText}>{labelText}</label>
        <input
          type="text"
          id={attributeText}
          name={attributeText}
          placeholder={placeholderTxt}
        />
      </div>
    );
  }
}

export default TextInput;
