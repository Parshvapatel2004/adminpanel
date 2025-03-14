import React, { useState } from "react";
import Slider from "../Common/Slider";
import Navigation from "../Common/Navigation";
import Footer from "../Common/Footer";

const Feedback = () => {
  return (
    <>
      <Slider />
      <Navigation />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  // Sample feedback list
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      message: "Great service! Highly recommended.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      response: "",
      role: "Customer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      message: "The platform is easy to use, but needs a dark mode option.",
      rating: 4,
      avatar: "images/user.png",
      response: "",
      role: "Property Owner",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michaelj@example.com",
      message: "Good experience, but response time can improve.",
      rating: 3,
      avatar: "images/user.png",
      response: "",
      role: "Cusotmer",
    },
  ]);

  // Admin response state
  const [responses, setResponses] = useState({});

  // Profile Modal state
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Handle response input change
  const handleResponseChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  // Handle submitting a response
  const handleResponseSubmit = (id) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, response: responses[id] } : feedback
      )
    );
    setResponses({ ...responses, [id]: "" }); // Clear response input after submission
  };

  // Open user profile modal
  const handleViewProfile = (user) => {
    setSelectedProfile(user);
  };

  return (
    <div className="right_col" role="main" style={{ minHeight: "100vh" }}>
      <div className="mb-5">
        <div className="page-title">
          <div className="title_left">
            <h3>User Feedback</h3>
          </div>
        </div>
        <div className="clearfix" />

        {/* Feedback List */}
        <div className="row">
          <div className="col-md-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Feedback from Users</h2>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                {feedbacks.length === 0 ? (
                  <p>No feedback available.</p>
                ) : (
                  feedbacks.map((feedback) => (
                    <div
                      key={feedback.id}
                      className="well d-flex align-items-center"
                    >
                      {/* User Image */}
                      <div className="mr-3 text-center">
                        <img
                          src={feedback.avatar}
                          className="rounded-circle"
                          alt="User Avatar"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <br />
                        <button
                          className="btn btn-primary btn-sm mt-2"
                          onClick={() => handleViewProfile(feedback)}
                        >
                          View Profile
                        </button>
                      </div>

                      {/* Feedback Details */}
                      <div className="flex-grow-1">
                        <h4>
                          {feedback.name} <small>({feedback.role})</small>
                        </h4>
                        <p>
                          <strong>Email:</strong> {feedback.email}
                        </p>
                        <p>
                          <strong>Message:</strong> {feedback.message}
                        </p>
                        <p>
                          <strong>Rating:</strong>{" "}
                          {"⭐".repeat(feedback.rating)}{" "}
                        </p>

                        {/* Admin Response Section */}
                        {feedback.response ? (
                          <p>
                            <strong>Admin Response:</strong> {feedback.response}
                          </p>
                        ) : (
                          <div>
                            <textarea
                              className="form-control"
                              placeholder="Write a response..."
                              value={responses[feedback.id] || ""}
                              onChange={(e) =>
                                handleResponseChange(
                                  feedback.id,
                                  e.target.value
                                )
                              }
                            />
                            <button
                              className="btn btn-primary btn-sm mt-2"
                              onClick={() => handleResponseSubmit(feedback.id)}
                            >
                              Submit Response
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {selectedProfile && (
        <div className="modal-overlay">
          <div className="modal-content px-5 py-3">
            <h3>User Profile</h3>
            <img
              src={selectedProfile.avatar}
              className="rounded-circle mb-3"
              alt="User Avatar"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <p>
              <strong>Name:</strong> {selectedProfile.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedProfile.email}
            </p>
            <p>
              <strong>Role:</strong> {selectedProfile.role}
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setSelectedProfile(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedback;
