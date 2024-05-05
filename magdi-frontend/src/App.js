import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import NLS from "./HUN/NLS.js";
import Pioca from "./HUN/Pioca.js";
import Frekvencia from "./HUN/Frekvencia.js";
import Magamrol from "./HUN/Magamrol.js";
import Safe from "./HUN/Safe.js";
import Galery from "./HUN/Galery.js";
import Termekek from "./HUN/Termekek.js";
import Home from "./HUN/Home.js";
import Impresszum from "./HUN/Impresszum.js";
import Arak from "./HUN/Arak.js";
import Videok from "./HUN/Videok.js";

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
                Főoldal
              </Link>
              <div className="zaszlok text-center">
                  <img
                    className="m-1 rounded border zaszlo-img"
                    src="/images/hun.png"
                    alt="hun.JPG"
                  />
                  <img
                    className="m-1 rounded border zaszlo-img"
                    src="/images/eng.png"
                    alt="eng.JPG"
                  />
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
                      NLS diagnosztika
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Pioca"
                      onClick={toggleNavbar}
                    >
                      Pióca terápia
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
                      Frekvencia terápia
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Magamrol"
                      onClick={toggleNavbar}
                    >
                      Magamról
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Arak"
                      onClick={toggleNavbar}
                    >
                      Árak
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Videok"
                      onClick={toggleNavbar}
                    >
                      Videók
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Termekek"
                      onClick={toggleNavbar}
                    >
                      Termékek
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
            <Route path="/Galery" element={<Galery />} />
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
