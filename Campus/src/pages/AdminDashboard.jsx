import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const AdminDashboard = () => {
  const [selected, setSelected] = useState("View Dashboard");

  const tables = {
    "View Dashboard": (
      <table>
        <thead><tr><th>Metric</th><th>Value</th></tr></thead>
        <tbody><tr><td>Total Jobs</td><td>10</td></tr></tbody>
      </table>
    ),
    "Track Metrics": (
      <table>
        <thead><tr><th>Category</th><th>Count</th></tr></thead>
        <tbody><tr><td>Applications</td><td>50</td></tr></tbody>
      </table>
    )
  };

  return (
    <div className="layout">
      <Sidebar
        items={["View Dashboard", "Track Metrics"]}
        onSelect={setSelected}
      />

      <div className="content">
        <LoginForm />
        <div className="table-box">{tables[selected]}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
