import { useState } from "react";

const Practice = (props) => {
    const [count, setCount] = useState(0);
    const [textLive, setTextLive] = useState();
    const [showText, setShowText] = useState(true);
    const [textColor, setChangeColor] = useState("red");
    
    function increasEvent() {
      setCount(count + 1);
    }
    function decreaseEvent() {
      setCount(count - 1);
    }
    function setTo0Event() {
      setCount(0);
    }
    function liveWrite(event) {
      setTextLive(event.target.value);
    }
    function setShow_text() {
      setShowText(!showText);
    }
    function setChange_color() {
      setChangeColor(textColor === "blue" ? "red" : "blue")
    }
      return (
        <div className="Practice">
          <button onClick={increasEvent}>increat</button>
          <button onClick={decreaseEvent}>decrease</button>
          <button onClick={setTo0Event}>set to 0</button>
          <h1>{count}</h1>
          <br />
          <input type="text" placeholder="Enter Something..." onChange={liveWrite} />
          <h1>{textLive}</h1>
          <br />
          <button onClick={setShow_text}>Show / Hide</button>
          {showText === true &&<h1>Hossein Ghafouri</h1>}
          <br />
          <button onClick={setChange_color}>change Color</button>
          <h1 style={{color: textColor}}>Hossein Ghafouri</h1>
        </div>
      );
}
export default Practice;