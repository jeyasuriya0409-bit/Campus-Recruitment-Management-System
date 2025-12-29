import React from "react";
import AuthBox from "../components/AuthBox";

export default function RecruiterDashboard() {
  return (
    <div>
      <h2>Recruiter Dashboard</h2>

      <div className="layout">
        <AuthBox title="Recruiter" />

        <div className="card">
          <h3 className="card-title">Recruiter Actions</h3>

          <button className="secondary-btn">Post Jobs</button>
          <button className="secondary-btn">View Applications</button>
          <button className="secondary-btn">Schedule Interviews</button>
          <button className="secondary-btn">Give Feedback</button>
        </div>
      </div>
    </div>
  );
}
