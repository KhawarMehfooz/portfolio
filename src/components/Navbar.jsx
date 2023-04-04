import React from "react";
import logo from "../assets/logo.png";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="left">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="right">
            <div className="menu-container">
              <ul className="menu-items">
                <li>
                  <a className="menu-item" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="cta">
              <button id="cta-btn">Get in Touch</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
