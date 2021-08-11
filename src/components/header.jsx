import React, { PureComponent } from "react";
class Header extends PureComponent {
  state = {};
  render() {
    return (
      <header id="topnav" className="defaultscroll sticky d-print-none bg-white text-black">
        <div className="container">
          <a className="logo" href="index.html">
            <h3 className="logo-light-mode">Hostarena</h3>
            <h3 className="logo-dark-mode">Hostarena</h3>
          </a>
          <div className="buy-button">
            <a href="/#plans" className="btn btn-primary">
              Buy Now
            </a>
          </div>
          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                <div className="lines">
                  {" "}
                  <span></span> <span></span> <span></span>
                </div>
              </a>
            </div>
          </div>
          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <a
                  href="/"
                  className="sub-menu-item"
                  style={{ color: "black" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="sub-menu-item"
                  style={{ color: "black" }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="sub-menu-item"
                  style={{ color: "black" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>{" "}
            <div className="buy-menu-btn d-none">
              {" "}
              <a
                href="https://1.envato.market/4n73n"
                target="_blank"
                className="btn btn-primary"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
