import React, { Component } from "react";

const NavBar = props => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <sup className="m-1">
          <span className="badge badge-pill badge-secondary">
            {props.totalValues}
          </span>
        </sup>
      </a>
    </nav>
  );
};

export default NavBar;
