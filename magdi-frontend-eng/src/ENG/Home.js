import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="teljes">
      <div class="container home-egyedi text-center kep-sotet pt-3">
        <div class="kor-kep m-auto"></div>
        <blockquote class="blockquote mt-3">
          <p class="mb-0 text-center szoveg">
            Welcome to the homepage of the good-health cenre "légyjólközpont"!
          </p>
        </blockquote>
      </div>

      <div className="kitolto  d-sm-block"></div>
      <div className="kitolto  d-sm-block"></div>
      <div className="kitolto  d-sm-block"></div>

      <Footer />
    </div>
  );
}

export default Home;
