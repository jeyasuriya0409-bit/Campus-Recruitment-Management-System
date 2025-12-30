import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const RecruiterDashboard = () => {
  const links = ["Post Jobs", "View Applications", "Schedule Interviews", "Give Feedback"];
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

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
  const [candidateName, setCandidateName] = useState("");
  const [interviewDate, setInterviewDate] = useState("");

  const stored = JSON.parse(localStorage.getItem("interviews") || "[]");
  const [scheduledList, setScheduledList] = useState(stored);

  const [candidate, setCandidate] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  return (
    <>
      <Sidebar links={links} />

      <div className="content">
        {!loggedIn ? (
          <LoginForm
            role="recruiter"
            onLogin={(email) => {
              setUserEmail(email);
              setLoggedIn(true);
            }}
          />
        ) : (
          <>
            <h2>{recruiter.company} Recruiter Dashboard</h2>

            <p>HR: {recruiter.hr}</p>
            <p>Email: {recruiter.email}</p>
            <p><b>Logged in as:</b> {userEmail}</p>

            <h3>Applications</h3>
            <ul>
              {applications.map((a, index) => (
                <li key={index}>{a}</li>
              ))}
            </ul>

            {}
            <div className="card">
              <h3>Schedule Interview</h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const newEntry = { candidateName, interviewDate };

                  const updated = [...scheduledList, newEntry];

                  setScheduledList(updated);
                  localStorage.setItem("interviews", JSON.stringify(updated));

                  setCandidateName("");
                  setInterviewDate("");
                }}
              >
                <input
                  type="text"
                  placeholder="Candidate Name"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  required
                />

                <input
                  type="date"
                  value={interviewDate}
                  onChange={(e) => setInterviewDate(e.target.value)}
                  required
                />

                <button type="submit">Schedule</button>
              </form>

              <h4>Scheduled Interviews</h4>

              {scheduledList.length === 0 && <p>No interviews scheduled yet.</p>}

              <ul>
                {scheduledList.map((i, index) => (
                  <li key={index}>
                    {i.candidateName} — {i.interviewDate}
                  </li>
                ))}
              </ul>
            </div>

            {}
            <div className="card">
              <h3>Give Feedback</h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const entry = {
                    candidate,
                    feedback,
                    rating,
                    date: new Date().toLocaleDateString(),
                  };

                  setFeedbackList([...feedbackList, entry]);

                  setCandidate("");
                  setFeedback("");
                  setRating("");
                }}
              >
                <input
                  type="text"
                  placeholder="Candidate Name"
                  value={candidate}
                  onChange={(e) => setCandidate(e.target.value)}
                  required
                />

                <textarea
                  placeholder="Enter feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />

                <input
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Rating (1–5)"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                />

                <button type="submit">Submit Feedback</button>
              </form>

              <h4 style={{ marginTop: "15px" }}>Submitted Feedback</h4>

              {feedbackList.length === 0 && <p>No feedback yet.</p>}

              {feedbackList.map((f, i) => (
                <div key={i} className="feedback-card">
                  <p><b>Candidate:</b> {f.candidate}</p>
                  <p><b>Feedback:</b> {f.feedback}</p>
                  <p><b>Rating:</b> {f.rating}/5</p>
                  <p><b>Date:</b> {f.date}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RecruiterDashboard;
