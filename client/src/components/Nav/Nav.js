import React, { Component } from "react";
import logo from "../../images/devslogo.png"
// import { Link } from "react-router-dom";
import "./nav.css";



class Nav extends Component {
    render(){
        return (
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top">
            <div className="container">
              <button className="navbar-toggler navbar-toggler-center" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img src={logo} width="95" height="38" alt="" />
              </a>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/discover">BROWSE DEVELOPERS</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/Client">GET MATCHED WITH DEVELOPER</a>
                  </li>
                </ul>
              </div>
              <form className="form-inline">
                <button type="button" className="btn btn-outline-light navbar-btn">Sign in</button>
              </form>
              {/* <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
            </div>
          </nav>
        );
    }
}

export default Nav;



