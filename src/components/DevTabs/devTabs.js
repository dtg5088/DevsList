import React from "react";
import { Link } from "react-router-dom";

function DevTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link //visible if frontend clicked or full clicked
            to="/frontendDev"
            className={window.location.pathname === "/frontendDev" ? "nav-link active" : "nav-link"}>
          Frontend Developer Tools
        </Link>
      </li>
      <li className="nav-item">
        <Link //visible if backend clicked or full clicked
          to="/backendDev"
          className={window.location.pathname === "/backendDev" ? "nav-link active" : "nav-link"}>
          Backend Developer Tools
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/fullstack"
          className={window.location.pathname === "/frontendDev/backendDev" ? "nav-link active" : "nav-link"}
        >
          Fullstack Tools
        </Link>
      </li>
    </ul>
  );
}  

export default DevTabs;
