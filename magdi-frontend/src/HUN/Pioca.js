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
              <h5>Népi pióca kezelés</h5>
              <p>
                A hirudoterápia hatékony és mellékhatások nélküli módszer
                különféle betegségek kezelésére, elsősorban érrendszeri
                problémáknál alkalmazzák, a nyirok keringés serkentésére. Segít
                felszabadítani a méreganyagokat.
              </p>
              <br />
              <p className="card-text">
                A piócák segítik a véráramlást, normalizálják a vérnyomást, a
                vér sűrűségét, és kezelik a vérrögképződéssel kapcsolatos
                problémákat. Emellett hatékonyak az aranyér, az ízületi,
                idegrendszeri és bőrbetegségek kezelésében, valamint az
                immunrendszer erősítésében is. A piócaterápia széles körben
                alkalmazható és jó eredményeket mutat, valamint kozmetikai
                célokra is felhasználható.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-beige container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="card border-0 shadow">
              <div className="slider mt-4 m-auto">
                <Slider {...settings}>
                  <img
                    src="images/pioca-2.jpg"
                    className="rounded"
                    alt="baba"
                  />
                  <img
                    src="images/pioca_magdie2.jpg"
                    className="rounded"
                    alt="baba+magdi"
                  />
                </Slider>
                <br />
              </div>
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
