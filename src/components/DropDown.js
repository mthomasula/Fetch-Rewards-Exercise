import React from "react";
import { useState } from "react";

function DropDown(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.formHandler(event);
  };

  const listOptions = props.listOptions.map((option) => {
    if (option.name) {
      return <option key={option.name}>{option.name}</option>;
    } else {
      return <option key={option}>{option}</option>;
    }
  });

  return (
    <div>
      <label>{props.label}</label>
      <select name={props.name} value={selectedOption} onChange={handleChange}>
        {listOptions}
      </select>
    </div>
  );
}

export default DropDown;
