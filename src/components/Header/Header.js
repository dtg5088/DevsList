import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    render() {
        return (
          <header>
            <div className="jumbotron jumbotron-fluid">
              <div className="head">
                <h1>Devs List</h1>
                <div>
                  <p>
                    <br />
                    <button type="button" className="btn btn-danger">
                      Find an expert
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="content-slider">
              <div className="slider">
                <div className="mask">
                  <ul>
                    <li className="anim1">
                      <div className="quote">The best place to find developers</div>
                      <div className="source">- The Verge</div>
                    </li>
                    <li className="anim2">
                      <div className="quote">Hello, this is a quote from another person.</div>
                      <div className="source">- Another person</div>
                    </li>
                    <li className="anim3">
                      <div className="quote">Hello, this is a quote from an animal.</div>
                      <div className="source">- Animal</div>
                    </li>
                    <li className="anim4">
                      <div className="quote">Hello, this is a quote from a plant.</div>
                      <div className="source">- Plant</div>
                    </li>
                    <li className="anim5">
                      <div className="quote">How do ya like that.</div>
                      <div className="source">- Cassidy</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        );
    }
}

export default Header;

