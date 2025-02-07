import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        {/* Page Header */}
        <h2 className="text-center mb-4 fw-bold text-primary">Admin Dashboard</h2>

        {/* Dashboard Actions */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="list-group">
              <Link
                to="/admin/create-admin"
                className="list-group-item list-group-item-action d-flex align-items-center py-3"
              >
                <i className="bi bi-person-plus fs-4 me-1"></i>
                <span className="fs-5">Create New Admin</span>
              </Link>
              <Link
                to="/admin/create-team"
                className="list-group-item list-group-item-action d-flex align-items-center py-3"
              >
                <i className="bi bi-people fs-4 me-1"></i>
                <span className="fs-5">Create Team</span>
              </Link>
              <Link
                to="/admin/schedule-match"
                className="list-group-item list-group-item-action d-flex align-items-center py-3"
              >
                <i className="bi bi-calendar-event fs-4 me-1"></i>
                <span className="fs-5">Schedule Match</span>
              </Link>
              <Link
                to="/matches"
                className="list-group-item list-group-item-action d-flex align-items-center py-3"
              >
                <i className="bi bi-eye fs-4 me-1"></i>
                <span className="fs-5">View Matches</span>
              </Link>
              <Link
                to="/points"
                className="list-group-item list-group-item-action d-flex align-items-center py-3"
              >
                <i className="bi bi-table fs-4 me-1"></i>
                <span className="fs-5">View Point Table</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;