import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: props.navBg }}
    >
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand" to="/" style={{ color: props.color }}>
          Navbar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Home → Textform page */}
            <li className="nav-item">
              <Link className="nav-link" to="/Textform" style={{ color: props.color }}>
                Home
              </Link>
            </li>

             <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: props.color }}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: props.color }}>
                Link
              </Link>
            </li>

          </ul>

          {/* Dark mode toggle */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onChange={props.toggleMode}
            />

            <label className="form-check-label">
              Enable Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
}