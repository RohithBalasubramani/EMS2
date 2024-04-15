import React from "react";
import DonutChart from "./Dashboard/DonutDash";

const DashboardPage = () => {
  return (
    <div>
      <div className="container-fluid">
        {/*  <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>

        {/*  <!-- Content Row --> */}
        <div className="row">
          {/*  <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Production (Today)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      XXXXX
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Production (Annual)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      XXXXX
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-danger shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Tasks
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          20%
                        </div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-danger a1"
                            role="progressbar"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- Pending Requests Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending Requests
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <!-- Content Row --> */}

        <div className="row">
          {/*   <!-- Area Chart --> */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/*  <!-- Card Header - Dropdown --> */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Production Overview
                </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              {/*  <!-- Card Body --> */}
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="myAreaChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- Pie Chart --> */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              {/*  <!-- Card Header - Dropdown --> */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Production Componentwise
                </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              {/*  <!-- Card Body --> */}
              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <DonutChart />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*   <!-- Content Row --> */}
        <div className="row">
          {/*   <!-- Content Column --> */}
          <div className="col-lg-6 mb-4">
            {/* <!-- Project Card Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
              </div>
              <div className="card-body">
                <h4 className="small font-weight-bold">
                  Production Today <span className="float-right">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Parameter 1<span className="float-right">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning a3"
                    role="progressbar"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Parameter 2 <span className="float-right">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar a7"
                    role="progressbar"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Parameter 3 <span className="float-right">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Process <span className="float-right">Complete!</span>
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-success a5"
                    role="progressbar"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* <!-- Color System --> */}
            <div className="row"></div>
          </div>

          <div className="col-lg-6 mb-4">
            {/* <!-- Illustrations --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Illustrations
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                    src="img/undraw_posting_photo.svg"
                    alt="..."
                  />
                </div>

                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                  Decide the flow
                </a>
              </div>
            </div>

            {/* <!-- Approach --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
