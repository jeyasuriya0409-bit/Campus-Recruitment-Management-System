import React from "react";
import AuthBox from "../components/AuthBox";

export default function AdminDashboard() {
  return (
    <div>
      <h2>Admin / Placement Cell Dashboard</h2>

      <div className="layout">
        <AuthBox title="Admin" />

        <div className="card">
          <h3 className="card-title">Admin Actions</h3>

          <button className="secondary-btn">View Dashboard</button>
          <button className="secondary-btn">
            Track Metrics (Jobs / Applications / Interviews)
          </button>
        </div>
      </div>
    </div>
  );
}
