// import logo from "./logo.svg";
import Users from "./components/Users.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('');
const textLive = (event) => { 
  setText(event.target.value)
}
  return (
    <div className="App">
      <input type="text" onChange={textLive}/>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
