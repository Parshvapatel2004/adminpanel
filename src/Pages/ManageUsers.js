import React from "react";
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
  // Sample User Data
  const users = [
    {
      id: "U001",
      name: "John Doe",
      email: "johndoe@example.com",
      contact: "+91 9055591234",
      avatar: "images/user.png",
      status: "Active",
      actions: ["View", "Edit", "Delete"],
    },
    {
      id: "U002",
      name: "Jane Smith",
      email: "janesmith@example.com",
      contact: "+91 9055591234",
      avatar: "images/user.png",
      status: "Inactive",
      actions: ["View", "Edit", "Delete"],
    },
    {
      id: "U003",
      name: "Michael Johnson",
      email: "michaelj@example.com",
      contact: "+91 9055591234",
      avatar: "images/user.png",
      status: "Active",
      actions: ["View", "Edit", "Delete"],
    },
  ];

  return (
    <div className="right_col" role="main">
      <div>
        <div className="page-title">
          <div className="title_left">
            <h3>
              Manage Users <small>Details</small>
            </h3>
          </div>
          <div className="title_right">
            <div className="col-md-5 col-sm-5 form-group pull-right top_search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search users..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">
                    Go!
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="row">
          <div className="col-md-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Users List</h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li>
                    <a className="collapse-link">
                      <i className="fa fa-chevron-up" />
                    </a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                <p>List of all registered users.</p>
                {/* Start users list */}
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
                              user.status === "Active" ? "bg-green" : "bg-red"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          {user.actions.map((action, actionIndex) => (
                            <a
                              key={actionIndex}
                              href="#"
                              className={`btn btn-xs ${
                                action === "View"
                                  ? "btn-primary"
                                  : action === "Edit"
                                  ? "btn-warning"
                                  : "btn-danger"
                              } m-1`}
                            >
                              <i
                                className={`fa ${
                                  action === "View"
                                    ? "fa-eye"
                                    : action === "Edit"
                                    ? "fa-pencil"
                                    : "fa-trash"
                                }`}
                              />{" "}
                              {action}
                            </a>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* End users list */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
