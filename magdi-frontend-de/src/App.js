import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import NLS from "./DE/NLS.js";
import Pioca from "./DE/Pioca.js";
import Frekvencia from "./DE/Frekvencia.js";
import Magamrol from "./DE/Magamrol.js";
import Safe from "./DE/Safe.js";
import Termekek from "./DE/Termekek.js";
import Home from "./DE/Home.js";
import Impresszum from "./DE/Impresszum.js";
import Arak from "./DE/Arak.js";
import Videok from "./DE/Videok.js";

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
                Startseite
              </Link>
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
                      NLS Diagnostik
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Pioca"
                      onClick={toggleNavbar}
                    >
                      Blutegeltherapie
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
                      Frequenztherapie
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Magamrol"
                      onClick={toggleNavbar}
                    >
                      Über mich
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
                      Produkte
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
