import React, { useState } from "react";
import Slider from "../Common/Slider";
import Navigation from "../Common/Navigation";
import Footer from "../Common/Footer";

const ManageUsers = () => {
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
  const [users, setUsers] = useState([
    {
      id: "U001",
      name: "John Doe",
      email: "johndoe@example.com",
      contact: "+91 9055591234",
      avatar: "images/picture.jpg",
      status: "Active",
    },
    {
      id: "U002",
      name: "Jane Smith",
      email: "janesmith@example.com",
      contact: "+91 9055591234",
      avatar: "images/user.png",
      status: "Inactive",
    },
    {
      id: "U003",
      name: "Michael Johnson",
      email: "michaelj@example.com",
      contact: "+91 9055591234",
      avatar: "images/user.png",
      status: "Active",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  // Function to handle View action
  const handleView = (user) => {
    setSelectedUser(user);
  };

  // Function to handle Delete action
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  return (
    <div className="right_col" role="main" style={{ minHeight: "100vh" }}>
      <div className="mb-5">
        <div className="page-title">
          <div className="title_left">
            <h3>
              Manage Users <small>Details</small>
            </h3>
          </div>
        </div>
        <div className="clearfix" />
        <div className="row">
          <div className="col-md-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Users List</h2>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                {users.length == 0 ? (
                  <>
                    <p>No Users available.</p>
                  </>
                ) : (
                  <div>
                    <p>List of all registered users.</p>
                    <table className="table table-striped projects">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>User</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={user.avatar}
                                className="rounded-circle"
                                alt="User Avatar"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  objectFit: "cover",
                                  marginRight: "10px",
                                }}
                              />
                              {user.name}
                            </td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>
                              <span
                                className={`badge ${
                                  user.status === "Active"
                                    ? "bg-green"
                                    : "bg-red"
                                }`}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td>
                              <button
                                className="btn btn-xs btn-primary m-1"
                                onClick={() => handleView(user)}
                              >
                                <i className="fa fa-eye" /> View
                              </button>
                              <button
                                className="btn btn-xs btn-danger m-1"
                                onClick={() => handleDelete(user.id)}
                              >
                                <i className="fa fa-trash" /> Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View User Modal */}
      {selectedUser && (
        <div className="modal-overlay " style={{ marginBottom: "70px" }}>
          <div className="modal-content px-5 py-5">
            <h3 className="pb-2">User Details</h3>
            <img
              src={selectedUser.avatar}
              className="rounded-circle mb-3"
              alt="User Avatar"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <p>
              <strong>ID:</strong> {selectedUser.id}
            </p>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Contact:</strong> {selectedUser.contact}
            </p>
            <p>
              <strong>Status:</strong> {selectedUser.status}
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUsers;
