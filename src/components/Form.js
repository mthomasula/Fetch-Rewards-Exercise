import React from "react";
import DropDown from "./DropDown";
import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  const handleChange = (event) => {
    setFormData((previous) => {
      return { ...previous, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.occupation && !formData.state) {
      alert("Must complete all fields");
    } else {
      const res = await axios.post(
        "https://frontend-take-home.fetchrewards.com/form",
        formData
      );

      alert(`Form Submitted Status: ${res.status}`);
    }
  };

  console.log(formData);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="ui form">
        <input
          type="text"
          required
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          required
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <DropDown
          label={"State: "}
          listOptions={props.locations}
          formHandler={handleChange}
          name={"state"}
        />
        <DropDown
          label={"Occupation: "}
          listOptions={props.occupations}
          formHandler={handleChange}
          name={"occupation"}
        />
        <input type="submit" class="positive ui button" />
      </form>
    </div>
  );
}

export default Form;
