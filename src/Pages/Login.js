import React from "react";

const Login = () => {
  return (
    <>
      <Main />
    </>
  );
};

function Main() {
  return (
    <div className="bg-white overflow_hidden" style={{ height: "100vh" }}>
      <div className="login_wrapper">
        <div className="animate form login_form">
          <section className="login_content">
            <form>
              <h1 style={{ fontSize: "30px", letterSpacing: "1px" }}>
                Login Admin
              </h1>
              <div>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Username"
                  required
                  style={{ fontSize: "18px", padding: "12px" }}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  style={{ fontSize: "18px", padding: "12px" }} // Increased font & padding
                />
              </div>
              <div className="form-group d-flex  justify-content-center align-items-center">
                <a
                  className="btn btn-default submit"
                  href="index.html"
                  style={{ fontSize: "18px", padding: "10px 20px" }}
                >
                  Log in
                </a>
                <a className="reset_pass" href="#" style={{ fontSize: "16px" }}>
                  Lost your password?
                </a>
              </div>
              <div className="clearfix" />
              <div className="separator">
                <div>
                  <p style={{ fontSize: "12px" }}>
                    ©2025 All Rights Reserved. Renting Properties. Privacy and
                    Terms
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
