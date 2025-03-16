import React, { useState } from "react";
import Slider from "../Common/Slider";
import Navigation from "../Common/Navigation";
import Footer from "../Common/Footer";

const ManageOwners = () => {
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
  // Sample Owner Data with State
  const [owners, setOwners] = useState([
    {
      id: "O001",
      name: "John Doe",
      email: "johndoe@example.com",
      contact: "+91 9054800900",
      avatar: "images/picture.jpg",
      propertiesOwned: 5,
      status: "Active",
    },
    {
      id: "O002",
      name: "Jane Smith",
      email: "janesmith@example.com",
      contact: "+91 9054800900",
      avatar: "images/user.png",
      propertiesOwned: 3,
      status: "Inactive",
    },
    {
      id: "O003",
      name: "Michael Johnson",
      email: "michaelj@example.com",
      contact: "+91 9054800900",
      avatar: "images/user.png",
      propertiesOwned: 7,
      status: "Active",
    },
  ]);

  const [selectedOwner, setSelectedOwner] = useState(null);

  // Function to handle View action
  const handleView = (owner) => {
    setSelectedOwner(owner);
  };

  // Function to handle Delete action
  const handleDelete = (ownerId) => {
    if (window.confirm("Are you sure you want to delete this owner?")) {
      setOwners(owners.filter((owner) => owner.id !== ownerId));
    }
  };

  return (
    <div className="right_col" role="main" style={{ minHeight: "100vh" }}>
      <div className="mb-5">
        <div className="page-title">
          <div className="title_left">
            <h3>
              Manage Owners <small>Details</small>
            </h3>
          </div>
        </div>
        <div className="clearfix" />
        <div className="row">
          <div className="col-md-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Owners List</h2>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                {owners.length === 0 ? (
                  <p>No owners available.</p>
                ) : (
                  <>
                    <p>List of all property owners.</p>
                    <table className="table table-striped projects">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Owner</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Properties Owned</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {owners.map((owner, index) => (
                          <tr key={owner.id}>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={owner.avatar}
                                className="rounded-circle"
                                alt="Owner Avatar"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  objectFit: "cover",
                                  marginRight: "10px",
                                }}
                              />
                              {owner.name}
                            </td>
                            <td>{owner.email}</td>
                            <td>{owner.contact}</td>
                            <td>{owner.propertiesOwned}</td>
                            <td>
                              <span
                                className={`badge ${
                                  owner.status === "Active"
                                    ? "bg-green"
                                    : "bg-red"
                                }`}
                              >
                                {owner.status}
                              </span>
                            </td>
                            <td>
                              <button
                                className="btn btn-xs btn-primary m-1"
                                onClick={() => handleView(owner)}
                              >
                                <i className="fa fa-eye" /> View
                              </button>
                              <button
                                className="btn btn-xs btn-danger m-1"
                                onClick={() => handleDelete(owner.id)}
                              >
                                <i className="fa fa-trash" /> Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Owner Modal */}
      {selectedOwner && (
        <div className="modal-overlay" style={{ marginBottom: "70px" }}>
          <div className="modal-content px-5 py-3">
            <h3 className="pb-2">Owner Details</h3>
            <img
              src={selectedOwner.avatar}
              className="rounded-circle mb-3"
              alt="Owner Avatar"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <p>
              <strong>ID:</strong> {selectedOwner.id}
            </p>
            <p>
              <strong>Name:</strong> {selectedOwner.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedOwner.email}
            </p>
            <p>
              <strong>Contact:</strong> {selectedOwner.contact}
            </p>
            <p>
              <strong>Properties Owned:</strong> {selectedOwner.propertiesOwned}
            </p>
            <p>
              <strong>Status:</strong> {selectedOwner.status}
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setSelectedOwner(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageOwners;
