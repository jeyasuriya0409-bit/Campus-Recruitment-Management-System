import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h2>Campus Recruitment System</h2>

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/student">Student Dashboard</Link></li>
      <li><Link to="/recruiter">Recruiter Dashboard</Link></li>
      <li><Link to="/admin">Admin Dashboard</Link></li>
    </ul>
  </nav>
);

export default Navbar;
