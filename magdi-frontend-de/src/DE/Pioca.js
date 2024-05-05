import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Footer from "./Footer";
import Slider from "react-slick";

function Pioca() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="btn btn-primary slick-prev">Previous</button>,
    nextArrow: <button className="btn btn-primary slick-next">Next</button>,
  };
  return (
    <div className="teljes">
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded img-fluid"
              src="images/piroca_magide.jpg"
              alt="pioca.jpeg"
              style={{ maxWidth: "75%", width: "50%" }}
            />
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="p-2 m-auto">
              <h5>Pioktherapie</h5>
              <p>
                Die Hirudotherapie ist eine wirksame und nebenwirkungsfreie
                Methode zur Behandlung verschiedener Krankheiten, die
                hauptsächlich bei Gefäßproblemen angewendet wird, um den
                Lymphfluss anzuregen und Giftstoffe freizusetzen.
              </p>
              <br />
              <p className="card-text">
                Die Blutegel helfen, den Blutfluss zu verbessern, den Blutdruck
                zu normalisieren, die Blutdichte zu regulieren und Probleme im
                Zusammenhang mit Blutgerinnseln zu behandeln. Darüber hinaus
                sind sie wirksam bei der Behandlung von Hämorrhoiden, Gelenk-,
                Nerven- und Hauterkrankungen sowie bei der Stärkung des
                Immunsystems. Die Blutegeltherapie wird weit verbreitet
                eingesetzt und zeigt gute Ergebnisse, und sie kann auch zu
                kosmetischen Zwecken verwendet werden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-beige container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div
              style={{ width: "75%" }}
              className="card border-0 shadow m-auto"
            >
              <img
                src="/images/pioca-2.jpg"
                className="card-img-top m-auto"
                alt="bgnd.jpeg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="kitolto"></div>

      <Footer />
    </div>
  );
}

export default Pioca;
