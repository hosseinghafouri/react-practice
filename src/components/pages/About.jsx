import { useNavigate } from "react-router-dom";
function About(params) {
    let navigate = useNavigate();
    return (
        <div className="About">
            <h1>About</h1>
            <button onClick={() => {navigate("/")}}>Go To Home Page</button>
        </div>
    )
}
export default About;