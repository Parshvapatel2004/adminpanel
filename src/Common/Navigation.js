import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Main />
    </>
  );
};

function Main() {
  return (
    <>
      <div className="top_nav">
        <div className="nav_menu">
          <div className="nav toggle">
            <a id="menu_toggle">
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <nav className="nav navbar-nav">
            <ul className=" navbar-right">
              <li
                className="nav-item dropdown open"
                style={{ paddingLeft: "15px" }}
              >
                <a
                  className="user-profile dropdown-toggle"
                  aria-haspopup="true"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="images/img.jpg" alt="" />
                  Admin
                </a>
                <div
                  className="dropdown-menu dropdown-usermenu pull-right"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to={"/profile"}>
                    {" "}
                    Profile
                  </Link>
                  <Link className="dropdown-item" to={"/login"}>
                    <i className="fa fa-sign-out pull-right"></i> Log Out
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
