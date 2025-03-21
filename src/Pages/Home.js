import React from "react";
import Navigation from "../Common/Navigation";
import Slider from "../Common/Slider";
import Footer from "../Common/Footer";

const Home = () => {
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
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="right_col" role="main" style={{ minHeight: "100vh" }}>
        {/* top tiles */}
        <div className="row" style={{ display: "inline-block" }}>
          <div className="tile_count">
            <div className="col-md-2 col-sm-4  tile_stats_count">
              <span className="count_top">
                <i className="fa fa-user" /> Total Users
              </span>
              <div className="count">2500</div>
              <span className="count_bottom">
                <i className="green">4% </i> From last Week
              </span>
            </div>
            <div className="col-md-2 col-sm-4  tile_stats_count">
              <span className="count_top">
                <i className="fa fa-clock-o" /> Average Time
              </span>
              <div className="count">123.50</div>
              <span className="count_bottom">
                <i className="green">
                  <i className="fa fa-sort-asc" />
                  3%{" "}
                </i>{" "}
                From last Week
              </span>
            </div>
            <div className="col-md-2 col-sm-4  tile_stats_count">
              <span className="count_top">
                <i className="fa fa-user" /> Total Males
              </span>
              <div className="count green">2,500</div>
              <span className="count_bottom">
                <i className="green">
                  <i className="fa fa-sort-asc" />
                  34%{" "}
                </i>{" "}
                From last Week
              </span>
            </div>
            <div className="col-md-2 col-sm-4  tile_stats_count">
              <span className="count_top">
                <i className="fa fa-user" /> Total Females
              </span>
              <div className="count">4,567</div>
              <span className="count_bottom">
                <i className="red">
                  <i className="fa fa-sort-desc" />
                  12%{" "}
                </i>{" "}
                From last Week
              </span>
            </div>
            <div className="col-md-2 col-sm-4  tile_stats_count">
              <span className="count_top">
                <i className="fa fa-user" /> Total Collections
              </span>
              <div className="count">2,315</div>
              <span className="count_bottom">
                <i className="green">
                  <i className="fa fa-sort-asc" />
                  34%{" "}
                </i>{" "}
                From last Week
              </span>
            </div>
            <div className="col-md-2 col-sm-4  tile_stats_count">
              <span className="count_top">
                <i className="fa fa-user" /> Total Connections
              </span>
              <div className="count">7,325</div>
              <span className="count_bottom">
                <i className="green">
                  <i className="fa fa-sort-asc" />
                  34%{" "}
                </i>{" "}
                From last Week
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
