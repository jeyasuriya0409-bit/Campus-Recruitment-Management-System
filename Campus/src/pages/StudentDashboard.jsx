import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const StudentDashboard = () => {
  const [selected, setSelected] = useState("View Jobs");

  const tables = {
    "View Jobs": (
      <table>
        <thead><tr><th>Job</th><th>Company</th></tr></thead>
        <tbody>
          <tr><td>Developer</td><td>ABC Tech</td></tr>
        </tbody>
      </table>
    ),
    "Apply for Jobs": (
      <table>
        <thead><tr><th>Job</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Developer</td><td>Applied</td></tr>
        </tbody>
      </table>
    ),
    "Check Application Status": (
      <table>
        <thead><tr><th>Application</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Developer</td><td>Under Review</td></tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="layout">
      <Sidebar
        items={["View Jobs", "Apply for Jobs", "Check Application Status"]}
        onSelect={setSelected}
      />

      <div className="content">
        <LoginForm />
        <div className="table-box">{tables[selected]}</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
