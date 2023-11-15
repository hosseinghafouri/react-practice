import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";

function About(params) {
  let navigate = useNavigate();
  const [toggle, setToggle] = useToggle();
  return (
    <div className="About">
      <h1>About</h1>
      <button onClick={() => navigate("/")}>Go To Home Page</button>
      <hr />
      <hr />
      <hr />
      <hr />

      <button onClick={setToggle}>
        {toggle ? "show" : "hide"}
      </button>
      {toggle && <h1>Hi My names Hossein</h1>}

    </div>
  );
}
export default About;
