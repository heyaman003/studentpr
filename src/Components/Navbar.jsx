import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark fixed-top"
      style={{ background: "#c98d16 "}}
     
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.lejhro.com/lejhro_logo_white.png"
            alt="Lejhro White Logo"
            className="top-header-fixed-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-dark bg-light"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <img
                src="https://www.lejhro.com/lejhro_logo_blue.png"
                alt="Lejhro White Logo"
                className="top-header-fixed-logo"
              />
            </h5>
            <button
              type="button"
              className="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
              
          </div>
          <hr style={{color:"black",opacity:0.1}}/>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      <h2 className="head">Blogs</h2>
    </nav>
  );
};

export default Navbar;
