import { useEffect, useState } from "react";
// import Axios from "axios";

const Practice = () => {
  const [excuse , setExcuse] = useState("");
  function party_excuse() {
    fetchData("party")
  }
  function family_excuse() {
    fetchData("family")

  }
  function office_excuse() {
    fetchData("office")

  }

  const fetchData = (name) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setExcuse(data[0])
      });
  };

  return (
    <div className="Practice">
      <h1>Generate excuse</h1>
      <button onClick={party_excuse}>Party</button>
      <button onClick={family_excuse}>Family</button>
      <button onClick={office_excuse}>office</button>
      <h1>{excuse.category}</h1>
      <h1>{excuse.excuse}</h1>
    </div>
  );
};
export default Practice;
