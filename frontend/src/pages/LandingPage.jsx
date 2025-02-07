import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-primary text-white text-center py-5">
      <div className="container">
        {/* Logo with white background */}
        <div style={{ backgroundColor: "white", display: "inline-block", padding: "10px", borderRadius: "10px" }}>
          <img
            style={{ width: "100px" }}
            src="https://igaptechnologies.com/assets/images/logo.png"
            alt="iGAP Technologies Logo"
          />
        </div>
        <h1 className="display-4 fw-bold mt-3">IGAP Cricket Tournament - 2025</h1>
        <p className="lead">Presented by iGAP Technologies Pvt. Ltd.</p>
        <div className="mt-4">
          <Link to={"/points"}>
            <a className="btn btn-warning btn-lg mx-2">
              <b>Check Point Table</b>
            </a>
          </Link>
          <Link to={"/matches"}>
            <a href="/matches-scheduled" className="btn btn-warning btn-lg mx-2">
              <b>View Matches Scheduled</b>
            </a>
          </Link>
        </div>

        <div className="div m-2">
          <Link to={"/admin/login"}>
            <a href="/matches-scheduled" className="btn btn-danger btn-lg mx-2">
              <b> Admin Login</b>
            </a>
          </Link>
        </div>

      </div>
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container">
          <p className="mb-0">
            &copy; 2025 iGAP Technologies Pvt. Ltd. | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;