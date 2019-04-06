import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    render() {
        return (

            <header>
                <div className="head">
                    <h1>Dev's List</h1>
                    <div>
                        <p>Dev's List is a marketplace for developers to allocate their services with clients around the world</p>
                    </div>
                </div>

            </header>

        );
    }
}

export default Header;

