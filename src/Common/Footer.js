import React from "react";

const Footer = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

function Main() {
  return (
    <>
      {/* footer content */}
      <footer>
        <div className="pull-right">
          Gentelella - Bootstrap Admin Template by{" "}
          <a href="https://colorlib.com/">Colorlib</a>
        </div>
        <div className="clearfix" />
      </footer>
      {/* /footer content */}
    </>
  );
}

export default Footer;
