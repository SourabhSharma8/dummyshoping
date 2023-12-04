import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" href="#">
          RADHEY KRISHNA GIFT CENTER
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-white">
            <li className="nav-item ">
              <Link className="nav-link text-white" to={"/"}>
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"checkout"}>
                CHECKOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
