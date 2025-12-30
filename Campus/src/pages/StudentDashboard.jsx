import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const StudentDashboard = () => {
  const links = ["View Jobs", "Apply for Jobs", "Check Application Status"];

  const [userEmail, setUserEmail] = useState("");

  const jobs = [
    "Software Developer - TCS",
    "Frontend Intern - Infosys",
    "Java Developer - Wipro",
  ];

  
  const applicationStatus = [
    { job: "Software Developer - TCS", status: "Under Review" },
    { job: "Frontend Intern - Infosys", status: "Shortlisted" },
    { job: "Java Developer - Wipro", status: "Rejected" },
  ];

  const handleLogin = (email) => setUserEmail(email);

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!userEmail ? (
          <LoginForm role="student" onLogin={handleLogin} />
        ) : (
          <>
            <h2>Welcome, {userEmail}</h2>

            <h3>Available Jobs</h3>
            <ul>
              {jobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>

            <h3>Application Status</h3>
            <ul>
              {applicationStatus.map((app, index) => (
                <li key={index}>
                  <strong>{app.job}</strong> — {app.status}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default StudentDashboard;
