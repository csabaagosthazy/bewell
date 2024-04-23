import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import NLS from "./HUN/NLS.js";
import Pioca from "./HUN/Pioca.js";
import Frekvencia from "./HUN/Frekvencia.js";
import Magamrol from "./HUN/Magamrol.js";
import Safe from "./HUN/Safe.js";
import Galery from "./HUN/Galery.js";
import Termekek from "./HUN/Termekek.js";
import Home from "./HUN/Home.js";

function App() {
  return (
    <div>
      <div>
  <Router>
    <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Főoldal</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/NLS">NLS diagnosztika</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Pioca">Pióca terápia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Safe">Safe laser</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Frekvencia">Frekvencia terápia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Magamrol">Magamról</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Galery">Galéria</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Termekek">Termékek?</Link>
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
    </Routes>
  </Router>
</div>

    </div>
  );
}

export default App;
