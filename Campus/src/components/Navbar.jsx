import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link className="logo" to="/">CRMS</Link>
      </div>

      <div className="nav-right">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/student">Student</Link>
        <Link className="nav-item" to="/recruiter">Recruiter</Link>
        <Link className="nav-item" to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
