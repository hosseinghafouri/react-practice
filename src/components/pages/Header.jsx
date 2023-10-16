import { Link } from "react-router-dom";
function Header(params) {
  return (
    <div className="Header">
      <nav className="header_nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile/:name">Profile</Link>
      </nav>
    </div>
  );
}
export default Header;
