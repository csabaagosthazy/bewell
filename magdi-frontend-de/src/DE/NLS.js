import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Footer from "./Footer";
import Slider from "react-slick";

function NLS() {
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
          <div className="col-md-6 col-lg-6 col-xl-6 text-center p-3">
            <img
              className="m-3 rounded"
              src="/images/nls.jpg"
              style={{ width: "75%" }}
              alt="baba.jpg"
            />
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div class="p-2 m-auto">
              <h5>NLS-Diagnostik</h5>
              <p>
                Diese Technologie ermöglicht eine umfassende Analyse aller
                Organe und Systeme des menschlichen Körpers. Sie basiert auf
                alten Heiltraditionen und stützt sich gleichzeitig auf die
                Ergebnisse moderner wissenschaftlicher Forschung.
              </p>
              <br />
              <h5 className="card-title text-center">Enthält:</h5>
              <div className="card-text">
                <ul>
                  <li>
                    Gastroenterologie, die sich mit dem Verdauungssystem befasst
                  </li>
                  <li>
                    Pulmonologie, die sich mit der Lunge und dem Atmungssystem
                    befasst
                  </li>
                  <li>
                    Gynäkologische Beschwerden und Erkrankungen: Zysten,
                    Geschlechtskrankheiten, Endometriose-Erkennung
                  </li>
                  <li>
                    Endokrinologie, die den Hormonhaushalt des Körpers betrifft:
                    Schilddrüse, Hypophyse, Eierstöcke, Hoden,
                    Nebennierenzustand
                  </li>
                  <li>
                    Untersuchung von Mikroorganismen: zeigt das Vorhandensein
                    und die Behandlungsmöglichkeiten von Bakterien, Pilzen,
                    Parasiten und Virusinfektionen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-beige container">
        <div className="row">
          <div className="col-md-12 mt-2">
            <div className="card border-0 shadow">
              <div className="slider mt-4 m-auto">
                <Slider {...settings}>
                  <img src="images/baba.jpg" className="rounded" alt="baba" />
                  <img
                    src="images/baba+magdi2.jpg"
                    className="rounded"
                    alt="baba+magdi"
                  />
                  <img
                    src="images/nls_bacsi.jpg"
                    className="rounded"
                    alt="nls_bacsi"
                  />
                  <img
                    src="images/baba+magdi.jpg"
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

      <Footer />
    </div>
  );
}

export default NLS;
