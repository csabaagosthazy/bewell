import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import NLS from "./ENG/NLS.js";
import Pioca from "./ENG/Pioca.js";
import Frekvencia from "./ENG/Frekvencia.js";
import Magamrol from "./ENG/Magamrol.js";
import Safe from "./ENG/Safe.js";
import Termekek from "./ENG/Termekek.js";
import Home from "./ENG/Home.js";
import Impresszum from "./ENG/Impresszum.js";
import Arak from "./ENG/Arak.js";
import Videok from "./ENG/Videok.js";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div>
        <Router>
          <nav
            className="navbar bg-dark border-body navbar-expand-lg"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <Link
                className="navbar-brand"
                to="/"
                onClick={() => setCollapsed(true)}
              >
                Homepage
              </Link>
              <div className="zaszlok text-center">
                <a href="http://legyjolkozpont.hu">
                  <img
                    className="m-1 rounded border zaszlo-img"
                    src="/images/hun.png"
                    alt="hun.JPG"
                  />
                </a>
                <a href="http://eng.legyjolkozpont.hu">
                  <img
                    className="m-1 rounded border zaszlo-img"
                    src="/images/eng.png"
                    alt="eng.JPG"
                  />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                aria-expanded={!collapsed}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  collapsed ? "" : "show"
                }`}
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/NLS" onClick={toggleNavbar}>
                      NLS diagnostics
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Pioca"
                      onClick={toggleNavbar}
                    >
                      Leech therapy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Safe"
                      onClick={toggleNavbar}
                    >
                      Safe laser
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Frekvencia"
                      onClick={toggleNavbar}
                    >
                      Frequency therapy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Magamrol"
                      onClick={toggleNavbar}
                    >
                      About me
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Arak"
                      onClick={toggleNavbar}
                    >
                      Prices
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Videok"
                      onClick={toggleNavbar}
                    >
                      Videos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Termekek"
                      onClick={toggleNavbar}
                    >
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NLS" element={<NLS />} />
            <Route path="/Pioca" element={<Pioca />} />
            <Route path="/Safe" element={<Safe />} />
            <Route path="/Frekvencia" element={<Frekvencia />} />
            <Route path="/Magamrol" element={<Magamrol />} />
            <Route path="/Termekek" element={<Termekek />} />
            <Route path="/Impresszum" element={<Impresszum />} />
            <Route path="/Arak" element={<Arak />} />
            <Route path="/Videok" element={<Videok />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
