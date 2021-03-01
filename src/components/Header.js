import React from "react";
import { Link, withRouter } from "react-router-dom";



function Header (props) {
    return (
      
      <header id="header">
         <nav id="nav-wrap">
         <ul className="nav nav-pills nav-fill">
         <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/portfolio" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
          </ul>
        </nav>
      </header>
    );
  }

export default withRouter(Header);
