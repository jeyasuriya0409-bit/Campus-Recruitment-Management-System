import React from "react";
import "./Sidebar.css";

const Sidebar = ({ links = [] }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      <ul>
        {links.length === 0 ? (
          <li>No menu items</li>
        ) : (
          links.map((link, index) => <li key={index}>{link}</li>)
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

