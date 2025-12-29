import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const RecruiterDashboard = () => {
  const [selected, setSelected] = useState("Post Jobs");

  const tables = {
    "Post Jobs": (
      <table>
        <thead><tr><th>Job</th><th>Date</th></tr></thead>
        <tbody><tr><td>Junior Dev</td><td>Dec 29</td></tr></tbody>
      </table>
    ),
    "View Applications": (
      <table>
        <thead><tr><th>Student</th><th>Status</th></tr></thead>
        <tbody><tr><td>Rahul</td><td>Pending</td></tr></tbody>
      </table>
    ),
    "Schedule Interviews": (
      <table>
        <thead><tr><th>Student</th><th>Date</th></tr></thead>
        <tbody><tr><td>Rahul</td><td>Jan 5</td></tr></tbody>
      </table>
    ),
    "Give Feedback": (
      <table>
        <thead><tr><th>Student</th><th>Feedback</th></tr></thead>
        <tbody><tr><td>Rahul</td><td>Good</td></tr></tbody>
      </table>
    ),
  };

  return (
    <div className="layout">
      <Sidebar
        items={["Post Jobs", "View Applications", "Schedule Interviews", "Give Feedback"]}
        onSelect={setSelected}
      />

      <div className="content">
        <LoginForm />
        <div className="table-box">{tables[selected]}</div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
