import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

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
    <div>
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded border"
              src="images/sample.jpeg"
              alt="Pioca Therapy"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div className="container w-75">
              <h5>Pióca terápia</h5>
              <p>
                A pióca terápia évszázadok óta használt gyógymód, melynek során
                a piócák vérrel táplálkoznak, és bizonyítottan pozitív hatással
                lehetnek számos egészségügyi problémára.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="display-4">
              Fedezze fel a természet gyógyító erejét
            </h2>
            <p className="lead">
              A pióca terápia nem csupán egy kezelés, hanem egy élmény, amely
              összeköt minket a természet csodáival.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center my-4">
        <img
          src="/images/sample.jpeg"
          className="img-fluid rounded mb-3"
          alt="Leech Therapy"
        />
        <p>
          A pióca terápia során a piócák speciális enzimeket juttatnak a
          vérbe, melyek segíthetnek csökkenteni a gyulladást és javítani a
          vérkeringést.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">Hogyan működik?</h5>
              <p className="m-2 text-start">
                A piócák nyálukban olyan enzimeket tartalmaznak, amelyek
                véralvadásgátló hatással rendelkeznek. Ezáltal segíthetnek
                csökkenteni a vérrögképződést és javítani a vérkeringést.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3  text-center">
              <img
                src="/images/sample.jpeg"
                className="rounded"
                alt="Pioca Therapy Process"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="p-3">
            <h3 className="text-center">Egy elégedett páciens vallomása</h3>
            <p className="text-start">
              "Sokáig szenvedtem a lábdagadástól, és semmi sem segített. Azután
              kipróbáltam a pióca terápiát, és hihetetlenül hatékonynak
              bizonyult. Most újra könnyedén tudok járni, és a dagadás teljesen
              eltűnt!"
            </p>
            <p className="text-start">- Kovács Katalin, 58 éves, Budapest</p>
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="w-75 m-auto mt-4">
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-center">Hogyan segíthet a pióca terápia?</h3>

            <div className="row">
              <div className="col">
                <p className="text-start">
                  A pióca terápia számos egészségügyi problémára lehet hatékony
                  megoldás, például:
                </p>
                <ul>
                  <li>Lábdagadás</li>
                  <li>Magas vérnyomás</li>
                  <li>Migrén</li>
                  <li>Ízületi gyulladás</li>
                  <li>Érszűkület</li>
                </ul>
              </div>
              <div className="col">
                <p className="text-start">
                  A pióca terápia természetes módszer, mely minimalizálja a
                  mellékhatásokat, és hozzájárulhat az általános egészség és
                  jólét javításához.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer bg-dark text-light py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h5>Rólunk</h5>
              <p>
                Cégünk elkötelezett az egészség és a természetes gyógymódok
                iránt. Szakértőinkkel és tapasztalt terapeutáinkkal biztosítjuk,
                hogy a pióca terápia mindenki számára biztonságos és hatékony
                legyen.
              </p>
            </div>
            <div className="col-6">
              <h5>Kapcsolat</h5>
              <address>
                <p>Telefon: 123-456-7890</p>
                <p>Email: info@piocaterapia.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Pioca;
