import React, { useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Main />
    </>
  );
};

function Main() {
  // State for managing which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // Function to toggle submenu
  const toggleSubmenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <>
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{ border: "0" }}>
            <Link to={"/"} className="site_title">
              <span>Admin Dashboard</span>
            </Link>
          </div>
          <div className="clearfix"></div>

          {/* Profile Info */}
          <div className="profile clearfix">
            <div className="profile_pic">
              <Link to={"/profile"}>
                <img
                  src="images/img.jpg"
                  alt="..."
                  className="img-circle profile_img"
                />
              </Link>
            </div>
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>Admin</h2>
            </div>
          </div>
          <br />

          {/* Sidebar Menu */}
          <div
            id="sidebar-menu"
            className="main_menu_side hidden-print main_menu"
          >
            <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                {/* Home Menu */}
                <li>
                  <Link to={""} onClick={() => toggleSubmenu("home")}>
                    <i className="fa fa-home"></i> Home
                    <span
                      className={`fa ${
                        openMenu === "home"
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></span>
                  </Link>
                  <ul
                    className={`nav child_menu ${
                      openMenu === "home" ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <Link to="/">Dashboard</Link>
                    </li>
                  </ul>
                </li>

                {/* Tables Menu */}
                <li>
                  <Link to={""} onClick={() => toggleSubmenu("tables")}>
                    <i className="fa fa-table"></i> Tables
                    <span
                      className={`fa ${
                        openMenu === "tables"
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></span>
                  </Link>
                  <ul
                    className={`nav child_menu ${
                      openMenu === "tables" ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <Link to="/tables">Tables</Link>
                    </li>
                    <li>
                      <Link to="/tables_dynamic">Table Dynamic</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  {/* Manage Menu */}
                  <Link to={""} onClick={() => toggleSubmenu("manage")}>
                    <i className="fa fa-edit"></i> Manage
                    <span
                      className={`fa ${
                        openMenu === "manage"
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></span>
                  </Link>
                  <ul
                    className={`nav child_menu ${
                      openMenu === "manage" ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <Link to="/manage_users">Manage Users</Link>
                    </li>
                    <li>
                      <Link to="/manage_owners">Manage Owners</Link>
                    </li>
                    <li>
                      <Link to="/manage_properties">Manage Properties</Link>
                    </li>
                    <li>
                      <Link to="/manage_feedbacks">Manage Feedbacks</Link>
                    </li>
                    <li>
                      <Link to="/manage_complains">Manage Complains</Link>
                    </li>
                    <li>
                      <Link to="/manage_inquiries">Manage Inquiries</Link>
                    </li>
                  </ul>
                </li>
                {/* Payment Menu */}
                <li>
                  <Link href="#" onClick={() => toggleSubmenu("payment")}>
                    <i className="fa fa-money"></i>Payments
                    <span
                      className={`fa ${
                        openMenu == "payment"
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></span>
                  </Link>
                  <ul
                    className={`nav child_menu ${
                      openMenu == "payment" ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <Link to={"/view_payments"}>View Payments</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="sidebar-footer hidden-small">
            <div>
              <Link
                data-toggle="tooltip"
                data-placement="top"
                title="Settings"
                to={"/settings"}
              >
                <span
                  className="glyphicon glyphicon-cog"
                  aria-hidden="true"
                ></span>
              </Link>
              <Link
                data-toggle="tooltip"
                data-placement="top"
                title="FullScreen"
                to={"#"}
              >
                <span
                  className="glyphicon glyphicon-fullscreen"
                  aria-hidden="true"
                ></span>
              </Link>
              <Link
                data-toggle="tooltip"
                data-placement="top"
                title="View Profile"
                to={"/profile"}
              >
                <span
                  className="glyphicon glyphicon-user "
                  aria-hidden="true"
                ></span>
              </Link>
              <Link
                data-toggle="tooltip"
                data-placement="top"
                title="Logout"
                to={"/login"}
              >
                <span
                  className="glyphicon glyphicon-off"
                  aria-hidden="true"
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
