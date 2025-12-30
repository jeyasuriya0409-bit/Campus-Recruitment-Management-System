import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const AdminDashboard = () => {
  const links = ["View Jobs", "Students", "Reports"];
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const admin = {
    name: "Placement Officer",
    email: "admin@college.com",
  };

  const interviews = JSON.parse(localStorage.getItem("interviews") || "[]");

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!loggedIn ? (
          <LoginForm
            role="admin"
            onLogin={(email) => {
              setUserEmail(email);
              setLoggedIn(true);
            }}
          />
        ) : (
          <>
            <h2>{admin.name}</h2>
            <p>Email: {admin.email}</p>
            <p><b>Logged in as:</b> {userEmail}</p>

            <h3>Dashboard Stats</h3>
            <ul>
              <li>Total Students: 120</li>
              <li>Jobs Posted: 25</li>

              {}
              <li>Interviews Scheduled: {interviews.length}</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;

