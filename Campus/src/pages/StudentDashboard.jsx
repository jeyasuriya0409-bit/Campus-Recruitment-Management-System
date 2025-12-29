import React from "react";
import AuthBox from "../components/AuthBox";

export default function StudentDashboard() {
  return (
    <div>
      <h2>Student Dashboard</h2>

      <div className="layout">
        <AuthBox title="Student" />

        <div className="card">
          <h3 className="card-title">Student Actions</h3>

          <button className="secondary-btn">View Jobs</button>
          <button className="secondary-btn">Apply for Jobs</button>
          <button className="secondary-btn">Check Application Status</button>
        </div>
      </div>
    </div>
  );
}
