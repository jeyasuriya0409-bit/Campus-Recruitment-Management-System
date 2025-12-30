import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const AdminDashboard = () => {
  const links = ["View Jobs", "Students", "Reports"];

  const [userEmail, setUserEmail] = useState("");

  const admin = {
    name: "Placement Officer",
  };

  const stats = ["Total Students: 120", "Jobs Posted: 25", "Interviews Scheduled: 10"];

  const handleLogin = (email) => setUserEmail(email);

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!userEmail ? (
          <LoginForm role="admin" onLogin={handleLogin} />
        ) : (
          <>
            <h2>{admin.name}</h2>
            <p>Email: {userEmail}</p>

            <h3>Dashboard Stats</h3>
            <ul>
              {stats.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
