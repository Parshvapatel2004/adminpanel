import React from "react";
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
  // Sample Owner Data
  const owners = [
    {
      id: "O001",
      name: "John Doe",
      email: "johndoe@example.com",
      contact: "+91 9054800900",
      avatar: "images/user.png",
      propertiesOwned: 5,
      status: "Active",
      actions: ["View", "Edit", "Delete"],
    },
    {
      id: "O002",
      name: "Jane Smith",
      email: "janesmith@example.com",
      contact: "+91 9054800900",
      avatar: "images/user.png",
      propertiesOwned: 3,
      status: "Inactive",
      actions: ["View", "Edit", "Delete"],
    },
    {
      id: "O003",
      name: "Michael Johnson",
      email: "michaelj@example.com",
      contact: "+91 9054800900",
      avatar: "images/user.png",
      propertiesOwned: 7,
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
              Manage Owners <small>Details</small>
            </h3>
          </div>
          <div className="title_right">
            <div className="col-md-5 col-sm-5 form-group pull-right top_search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search owners..."
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
                <h2>Owners List</h2>
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
                <p>List of all property owners.</p>
                {/* Start owners list */}
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
                              owner.status === "Active" ? "bg-green" : "bg-red"
                            }`}
                          >
                            {owner.status}
                          </span>
                        </td>
                        <td>
                          {owner.actions.map((action, actionIndex) => (
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
                {/* End owners list */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageOwners;
