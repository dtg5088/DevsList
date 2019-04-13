import React, { Component } from 'react';
import "./footer.css";
import logo from "../../images/logo2.png";

class Footer extends Component {
    render() {
        return (

            <footer>
                <img src={logo} width="95" height="38" alt="" />
                <p>Support <br /> suppport@devslist.com</p>
                <ul>
                    <li><a href="www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </footer>

        );
    }
}

export default Footer;