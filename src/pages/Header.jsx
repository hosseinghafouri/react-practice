import { Link } from "react-router-dom";
function Header(params) {
  return (
    <div className="Header">
      <nav style={{display: "flex", justifyContent:"space-evenly"}}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Counter">Counter</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </div>
  );
}
export default Header;
