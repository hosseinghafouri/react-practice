// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/pages/Header.jsx";
import Practice from "./components/pages/Practice.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Profile from "./components/pages/Profile.jsx";
import Erorr from "./components/pages/Erorr.jsx";
// import CourseApp from "./project1/CourseApp.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:name?/:id?" element={<Profile />} />
          <Route path="*" element={<Erorr />} />
        </Routes>
        <div>
          This is footer
        </div>
      </Router>
    </div>
  );
}

export default App;
