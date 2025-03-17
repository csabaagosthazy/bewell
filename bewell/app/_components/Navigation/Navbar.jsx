"use client"

import './Navbar.css';
import React, {useState} from 'react';
import Link from 'next/link'
import LanguageSwitcher from "./LanguageSwitcher";

export const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };

    return ( 
        <nav
        className="navbar bg-dark border-body navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            href="/"
            onClick={() => setCollapsed(true)}
          >
            Főoldal
          </Link>
          <LanguageSwitcher />
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
                <Link className="nav-link" href="/NLS" onClick={toggleNavbar}>
                  NLS diagnosztika
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/Pioca"
                  onClick={toggleNavbar}
                >
                  Pióca terápia
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/Safe"
                  onClick={toggleNavbar}
                >
                  Safe laser
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/Frekvencia"
                  onClick={toggleNavbar}
                >
                  Frekvencia terápia
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/Magamrol"
                  onClick={toggleNavbar}
                >
                  Magamról
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/Arak"
                  onClick={toggleNavbar}
                >
                  Árak
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/Videok"
                  onClick={toggleNavbar}
                >
                  Videók
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/Termekek"
                  onClick={toggleNavbar}
                >
                  Termékek
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;