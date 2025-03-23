import React, { useState, useEffect } from "react";
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
  const initialProperties = [
    {
      id: "H001",
      title: "Vitanda House",
      type: "Villa",
      createdDate: "01.01.2015",
      location: "Beverly Hills, CA, USA",
      price: "₹5,000,000",
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
    },
    {
      id: "A002",
      title: "Modern Apartment",
      type: "Apartment",
      createdDate: "10.03.2019",
      location: "Manhattan, NY, USA",
      price: "₹850,000",
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
    },
  ];

  const [properties, setProperties] = useState(initialProperties);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Open View Modal
  const handleView = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
  };

  // Delete Property
  const handleDelete = (propertyId) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setProperties(
        properties.filter((property) => property.id !== propertyId)
      );
      setSuccessMessage("Property deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  // Close Modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProperty(null);
  };

  // Allow closing modals with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter properties based on search
  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchQuery) ||
      property.location.toLowerCase().includes(searchQuery) ||
      property.type.toLowerCase().includes(searchQuery) ||
      property.status.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="right_col" role="main" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="x_panel">
            <div className="x_title d-flex justify-content-between align-items-center">
              <h2>Properties List</h2>
              {/* Right-aligned search bar */}
              <div className="d-flex justify-content-end">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  style={{ width: "250px" }}
                />
              </div>
            </div>
            <div className="x_content">
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              {filteredProperties.length === 0 ? (
                <p className="text-center">No properties available.</p>
              ) : (
                <div>
                  <p>List of all available properties.</p>
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProperties.map((property, index) => (
                        <tr key={property.id}>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              src={property.owner.avatar}
                              className="rounded-circle"
                              alt="Owner Avatar"
                              style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                                marginRight: "10px",
                              }}
                            />
                            {property.title}
                          </td>
                          <td>{property.type}</td>
                          <td>{property.location}</td>
                          <td>{property.price}</td>
                          <td>
                            <span
                              className={`badge ${
                                property.status === "Pending"
                                  ? "bg-danger"
                                  : "bg-success"
                              }`}
                            >
                              {property.status}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn btn-xs btn-primary m-1"
                              onClick={() => handleView(property)}
                            >
                              <i className="fa fa-eye" /> View
                            </button>
                            <button
                              className="btn btn-xs btn-danger m-1"
                              onClick={() => handleDelete(property.id)}
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

      {/* View Property Modal */}
      {modalOpen && selectedProperty && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Property Details</h5>
                <button type="button" className="close" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Name:</strong> {selectedProperty.title}
                </p>
                <p>
                  <strong>Type:</strong> {selectedProperty.type}
                </p>
                <p>
                  <strong>Location:</strong> {selectedProperty.location}
                </p>
                <p>
                  <strong>Price:</strong> {selectedProperty.price}
                </p>
                <p>
                  <strong>Size:</strong> {selectedProperty.size}
                </p>
                <p>
                  <strong>Bedrooms:</strong> {selectedProperty.bedrooms}
                </p>
                <p>
                  <strong>Bathrooms:</strong> {selectedProperty.bathrooms}
                </p>
                <p>
                  <strong>Status:</strong> {selectedProperty.status}
                </p>
                <p>
                  <strong>Owner:</strong> {selectedProperty.owner.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageProperties;
