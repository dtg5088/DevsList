import React, { Component } from "react";

class Nav extends Component {
    render(){
        return (
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img
                src="https://via.placeholder.com/150"
                width="50"
                height="50"
                alt=""
              />
              DEV'S List
            </a>
            <form className="form-inline">
              <button className="btn btn-outline-success" type="button">
                Login
              </button>
            </form>
          </nav>
        );
    }
}

export default Nav;