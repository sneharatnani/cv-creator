import { useState } from "react";
import PersonalInfo from "./PersonalInfo.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Button from "./utility/Button.js";
import Preview from "./Preview.js";

export default function Main() {
  const [preview, setPreview] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    uniName: "",
    degree: "",
    stdStart: "",
    stdEnd: "",
    company: "",
    position: "",
    jobStart: "",
    jobEnd: "",
    desc: "",
  });

  // toggle preview
  function togglePreview() {
    setPreview((prevState) => !prevState);
  }

  // handle input changes
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  }

  // gather form parts and return it
  function showForm() {
    return (
      <form className="form">
        <PersonalInfo handleInput={handleInputChange} {...inputValue} />
        <Education handleInput={handleInputChange} {...inputValue} />
        <Experience handleInput={handleInputChange} {...inputValue} />
      </form>
    );
  }

  return (
    <main>
      {preview ? <Preview {...inputValue} /> : showForm()}
      <Button change={togglePreview} btnTxt={preview ? "edit" : "submit"} />
    </main>
  );
}
