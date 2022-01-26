import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";

export default function App() {
  const [locations, setLocations] = useState([]);
  const [occupations, setOccupations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://frontend-take-home.fetchrewards.com/form"
        );
        setLocations(res.data.states);
        setOccupations(res.data.occupations);
      } catch (err) {
        console.log(err.res.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ui container">
      <h2>Create User</h2>
      <Form locations={locations} occupations={occupations} />
    </div>
  );
}
