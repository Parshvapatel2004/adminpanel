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
                  href="javascript:;"
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

              <li role="presentation" className="nav-item dropdown open">
                <a
                  href="javascript:;"
                  className="dropdown-toggle info-number"
                  id="navbarDropdown1"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-envelope-o"></i>
                  <span className="badge bg-green">6</span>
                </a>
                <ul
                  className="dropdown-menu list-unstyled msg_list"
                  role="menu"
                  aria-labelledby="navbarDropdown1"
                >
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>Admin</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>Admin</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>Admin</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>Admin</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="text-center">
                      <a className="dropdown-item">
                        <strong>See All Alerts</strong>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
