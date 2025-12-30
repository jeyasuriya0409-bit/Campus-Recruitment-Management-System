import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const RecruiterDashboard = () => {
  const links = ["Post Jobs", "View Applications", "Schedule Interviews", "Give Feedback"];

  const [userEmail, setUserEmail] = useState("");

  const recruiter = {
    company: "Google",
    
  };

  const applications = [
    "Student 1 - React Developer",
    "Student 2 - Backend Developer",
    "Student 3 - QA Engineer",
  ];

  const handleLogin = (email) => setUserEmail(email);

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!userEmail ? (
          <LoginForm role="recruiter" onLogin={handleLogin} />
        ) : (
          <>
            <h2>{recruiter.company} Recruiter Dashboard</h2>

            
            <p>Email: {userEmail}</p>

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
