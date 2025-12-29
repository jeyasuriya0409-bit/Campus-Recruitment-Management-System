import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const StudentDashboard = () => {
  const links = ["View Jobs", "Apply for Jobs", "Check Application Status"];
  const [loggedIn, setLoggedIn] = useState(false);

  const userDetails = {
    name: "John Student",
    email: "student@example.com",
    course: "B.E CSE",
  };

  const jobs = [
    "Software Developer - TCS",
    "Frontend Intern - Infosys",
    "Java Developer - Wipro",
  ];

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!loggedIn ? (
          <LoginForm role="student" onLogin={() => setLoggedIn(true)} />
        ) : (
          <>
            <h2>Welcome, {userDetails.name}</h2>

            <p>Email: {userDetails.email}</p>
            <p>Course: {userDetails.course}</p>

            <h3>Available Jobs</h3>
            <ul>
              {jobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default StudentDashboard;
