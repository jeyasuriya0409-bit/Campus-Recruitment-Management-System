import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const StudentDashboard = () => {
  const links = ["View Jobs", "Apply for Jobs", "Check Application Status"];

  const [userEmail, setUserEmail] = useState("");
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);

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

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyForm(true);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setAppliedJobs([...appliedJobs, { name: applicantName, job: selectedJob }]);
    setApplicantName("");
    setSelectedJob("");
    setShowApplyForm(false);
  };

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
                <li key={index}>
                  {job}{" "}
                  <button onClick={() => handleApplyClick(job)}>Apply</button>
                </li>
              ))}
            </ul>

            {/* Apply Form */}
            {showApplyForm && (
              <form onSubmit={handleApplySubmit}>
                <h4>Apply for {selectedJob}</h4>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            )}

            {/* Applied Jobs */}
            {appliedJobs.length > 0 && (
              <>
                <h3>Applied Jobs</h3>
                <ul>
                  {appliedJobs.map((app, index) => (
                    <li key={index}>
                      <strong>{app.name}</strong> applied for <strong>{app.job}</strong>
                    </li>
                  ))}
                </ul>
              </>
            )}

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
