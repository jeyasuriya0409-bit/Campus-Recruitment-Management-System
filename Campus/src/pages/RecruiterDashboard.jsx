import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const RecruiterDashboard = () => {
  const links = ["Post Jobs", "View Applications", "Schedule Interviews", "Give Feedback"];
  const [loggedIn, setLoggedIn] = useState(false);

  const recruiter = {
    company: "Google",
    hr: "Priya Sharma",
    email: "hr@google.com",
  };

  const applications = [
    "Student 1 - React Developer",
    "Student 2 - Backend Developer",
    "Student 3 - QA Engineer",
  ];

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!loggedIn ? (
          <LoginForm role="recruiter" onLogin={() => setLoggedIn(true)} />
        ) : (
          <>
            <h2>{recruiter.company} Recruiter Dashboard</h2>

            <p>HR: {recruiter.hr}</p>
            <p>Email: {recruiter.email}</p>

            <h3>Applications</h3>
            <ul>
              {applications.map((a, index) => (
                <li key={index}>{a}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default RecruiterDashboard;
