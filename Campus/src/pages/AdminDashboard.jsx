import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const AdminDashboard = () => {
  const links = ["View Jobs", "Students", "Reports"];
  const [loggedIn, setLoggedIn] = useState(false);

  const admin = {
    name: "Placement Officer",
    email: "admin@college.com",
  };

  const stats = ["Total Students: 120", "Jobs Posted: 25", "Interviews Scheduled: 10"];

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!loggedIn ? (
          <LoginForm role="admin" onLogin={() => setLoggedIn(true)} />
        ) : (
          <>
            <h2>{admin.name}</h2>
            <p>Email: {admin.email}</p>

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
