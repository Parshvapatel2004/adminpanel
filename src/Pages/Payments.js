import React, { useState } from "react";
import Slider from "../Common/Slider";
import Navigation from "../Common/Navigation";
import Footer from "../Common/Footer";

const Payments = () => {
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
  // Sample payment data with userId, propertyId, and ownerId
  const [payments, setPayments] = useState([
    {
      id: "TXN12345",
      userId: "U001",
      user: "John Doe",
      email: "johndoe@example.com",
      amount: 500,
      method: "Credit Card",
      date: "2024-03-10",
      status: "Pending",
      propertyId: "P001",
      property: "Greenwood Apartment",
      ownerId: "O001",
      owner: "Alice Johnson",
      reference: "REF123ABC",
    },
    {
      id: "TXN67890",
      userId: "U002",
      user: "Jane Smith",
      email: "janesmith@example.com",
      amount: 1200,
      method: "UPI",
      date: "2024-03-09",
      status: "Completed",
      propertyId: "P002",
      property: "Sunset Villa",
      ownerId: "O002",
      owner: "Robert Brown",
      reference: "REF456XYZ",
    },
    {
      id: "TXN34567",
      userId: "U003",
      user: "Michael Johnson",
      email: "michaelj@example.com",
      amount: 800,
      method: "PayPal",
      date: "2024-03-08",
      status: "Failed",
      propertyId: "P003",
      property: "Luxury Condo",
      ownerId: "O003",
      owner: "Sophia Williams",
      reference: "REF789LMN",
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null); // For viewing payment details
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle status filter change
  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to mark payment as completed
  const handleMarkCompleted = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: "Completed" } : payment
      )
    );
  };

  // Function to delete payment
  const handleDelete = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  // Filtered payments based on status and search
  const filteredPayments = payments.filter((payment) => {
    return (
      (filterStatus === "All" || payment.status === filterStatus) &&
      (payment.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.owner.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div>
      <div className="right_col" role="main" style={{ minHeight: "100vh" }}>
        <div className="mb-5">
          <div className="page-title">
            <div className="title_left">
              <h3>Manage Payments</h3>
            </div>
            <div className="title_right">
              <div className="col-md-5 col-sm-5 form-group pull-right top_search">
                <div className="d-flex flex-column justify-content-center">
                  <label className="ml-2" htmlFor="search-payment">
                    Search by
                  </label>
                  <input
                    id="search-payment"
                    type="text"
                    className="form-control"
                    style={{ fontSize: "15px" }}
                    placeholder="Property, User, Transaction, or Owner..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />

          {/* Status Filter */}
          <div className="row">
            <div className="col-md-4">
              <label>Filter by Status:</label>
              <select className="form-control" onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>

          {/* Payments Table */}
          <div className="row">
            <div className="col-md-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Payments List</h2>
                  <div className="clearfix" />
                </div>
                <div className="x_content">
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Transaction ID</th>
                        <th>User</th>
                        <th>Property</th>
                        <th>Owner</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPayments.length === 0 ? (
                        <tr>
                          <td colSpan="10" className="text-center">
                            No payments found.
                          </td>
                        </tr>
                      ) : (
                        filteredPayments.map((payment, index) => (
                          <tr key={payment.id}>
                            <td>{index + 1}</td>
                            <td>{payment.id}</td>
                            <td>
                              {payment.user} ({payment.userId})
                            </td>
                            <td>
                              {payment.property} ({payment.propertyId})
                            </td>
                            <td>
                              {payment.owner} ({payment.ownerId})
                            </td>
                            <td>${payment.amount}</td>
                            <td>{payment.method}</td>
                            <td>{payment.date}</td>
                            <td>
                              <span
                                className={`p-1 badge ${
                                  payment.status === "Pending"
                                    ? "bg-warning"
                                    : payment.status === "Completed"
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {payment.status}
                              </span>
                            </td>
                            <td>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => setSelectedPayment(payment)}
                              >
                                View
                              </button>
                              {payment.status === "Pending" && (
                                <button
                                  className="btn btn-success btn-sm ml-2"
                                  onClick={() =>
                                    handleMarkCompleted(payment.id)
                                  }
                                >
                                  Mark as Completed
                                </button>
                              )}
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(payment.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Payment Modal */}
        {selectedPayment && (
          <div className="modal-overlay">
            <div className="modal-content px-5 py-3">
              <h3 className="pb-2">Payment Details</h3>
              <p>
                <strong>Transaction ID:</strong> {selectedPayment.id}
              </p>
              <p>
                <strong>User:</strong> {selectedPayment.user} (
                {selectedPayment.userId})
              </p>
              <p>
                <strong>Property:</strong> {selectedPayment.property} (
                {selectedPayment.propertyId})
              </p>
              <p>
                <strong>Owner:</strong> {selectedPayment.owner} (
                {selectedPayment.ownerId})
              </p>
              <p>
                <strong>Amount:</strong> ${selectedPayment.amount}
              </p>
              <p>
                <strong>Payment Method:</strong> {selectedPayment.method}
              </p>

              <button
                className="btn btn-secondary"
                onClick={() => setSelectedPayment(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payments;
