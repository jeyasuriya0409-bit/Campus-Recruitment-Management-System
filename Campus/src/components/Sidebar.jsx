import React from "react";

const Sidebar = ({ items, onSelect }) => (
  <div className="sidebar">
    {items.map(item => (
      <button key={item} onClick={() => onSelect(item)}>
        {item}
      </button>
    ))}
  </div>
);

export default Sidebar;
