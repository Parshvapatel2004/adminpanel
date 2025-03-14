import React from "react";
import Slider from "../Common/Slider";
import Navigation from "../Common/Navigation";
import Footer from "../Common/Footer";

const ManageProperties = () => {
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
  // Property data
  const properties = [
    {
      id: "H001",
      title: "Vitanda House",
      type: "Villa",
      createdDate: "01.01.2015",
      location: "Beverly Hills, CA, USA",
      price: "$5,000,000",
      size: "5000 sqft",
      bedrooms: 5,
      bathrooms: 6,
      progress: 27,
      status: "Pending",
      owner: {
        name: "John Doe",
        avatar: "images/user.png",
        contact: "+91 9054800900",
      },
      actions: ["View", "Edit", "Delete"],
    },
    {
      id: "A002",
      title: "Modern Apartment",
      type: "Apartment",
      createdDate: "10.03.2019",
      location: "Manhattan, NY, USA",
      price: "$850,000",
      size: "1200 sqft",
      bedrooms: 2,
      bathrooms: 2,
      progress: 85,
      status: "For Rent",
      owner: {
        name: "Jane Smith",
        avatar: "images/user.png",
        contact: "+91 9054800900",
      },
      actions: ["View", "Edit", "Delete"],
    },
    {
      id: "C003",
      title: "Downtown Office Space",
      type: "Commercial",
      createdDate: "01.05.2020",
      location: "Downtown Chicago, IL, USA",
      price: "$1,200,000",
      size: "3000 sqft",
      bedrooms: 0,
      bathrooms: 4,
      progress: 35,
      status: "Pending",
      owner: {
        name: "Michael Johnson",
        avatar: "images/user.png",
        contact: "+91 9054800900",
      },
      actions: ["View", "Edit", "Delete"],
    },
  ];

  return (
    <div className="right_col" role="main" style={{ minHeight: "100vh" }}>
      <div className="mb-5">
        <div className="page-title">
          <div className="title_left">
            <h3>
              Manage Properites <small>Details</small>
            </h3>
          </div>
          <div className="title_right">
            <div className="col-md-5 col-sm-5 form-group pull-right top_search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search properites..."
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
              <div className="x_content">
                <p>Detailed list of properties</p>
                {/* Start properties list */}
                <table className="table table-striped projects">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Property Name</th>
                      <th>Type</th>
                      <th>Location</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Bedrooms</th>
                      <th>Bathrooms</th>
                      <th>Owner</th>
                      <th>Progress</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property, index) => (
                      <tr key={property.id}>
                        <td>{index + 1}</td>
                        <td>
                          <strong>{property.title}</strong>
                          <br />
                          <small>Added: {property.createdDate}</small>
                        </td>
                        <td>{property.type}</td>
                        <td>{property.location}</td>
                        <td>{property.price}</td>
                        <td>{property.size}</td>
                        <td>{property.bedrooms}</td>
                        <td>{property.bathrooms}</td>
                        <td>
                          <img
                            src={property.owner.avatar}
                            className="rounded-circle"
                            alt="Owner Avatar"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                          <br />
                          <small>{property.owner.name}</small>
                          <br />
                          <small>{property.owner.contact}</small>
                        </td>

                        <td className="project_progress">
                          <div className="progress progress_sm">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width: `${property.progress}%` }}
                            ></div>
                          </div>
                          <small>{property.progress}%</small>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              property.status === "Pending"
                                ? "bg-red"
                                : "bg-blue"
                            }`}
                          >
                            {property.status}
                          </span>
                        </td>
                        <td>
                          {property.actions.map((action, actionIndex) => (
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
                {/* End properties list */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProperties;
