import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

function Safe() {
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
      {/* Background Section */}
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded border"
              src="/images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>Safe laser</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                quam voluptates labore impedit, deserunt iste! Aspernatur earum
                dolore quis exercitationem, facere, officiis odio assumenda nemo
                reiciendis vero eaque rem quidem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Discovery Section */}
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

      <div class="container text-center my-4">
        <img
          src="/images/sample.jpeg"
          class="img-fluid rounded mb-3"
          alt="Kép leírása"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

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
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h3 className="text-center">Egy elégedett páciens vallomása</h3>
            <p className="text-start">
              "Sokáig szenvedtem a lábdagadástól, és semmi sem segített. Azután
              kipróbáltam a pióca terápiát, és hihetetlenül hatékonynak
              bizonyult. Most újra könnyedén tudok járni, és a dagadás teljesen
              eltűnt!"
            </p>
          </div>
          <div class="col-6">
            <h3 className="text-center">Egy elégedett páciens vallomása</h3>
            <p className="text-start">
              "Sokáig szenvedtem a lábdagadástól, és semmi sem segített. Azután
              kipróbáltam a pióca terápiát, és hihetetlenül hatékonynak
              bizonyult. Most újra könnyedén tudok járni, és a dagadás teljesen
              eltűnt!"
            </p>
          </div>
        </div>
      </div>

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
                src="images/sample.jpeg"
                className="rounded"
                alt="Leech Therapy Process"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src="/images/sample.jpeg"
                className="card-img-top"
                alt="Benefit 1"
              />
              <div className="card-body">
                <h5 className="card-title">Vérkeringés javítása</h5>
                <p className="card-text">
                  A piócák enzimjei segítenek a vérkeringés fokozásában,
                  elősegítve az egészséges életmódot.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src="/images/sample.jpeg"
                className="card-img-top"
                alt="Benefit 2"
              />
              <div className="card-body">
                <h5 className="card-title">Fájdalomcsillapítás</h5>
                <p className="card-text">
                  Természetes fájdalomcsillapítóként ismert, a pióca terápia
                  enyhíti a krónikus fájdalmakat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src="/images/sample.jpeg"
                className="card-img-top"
                alt="Benefit 3"
              />
              <div className="card-body">
                <h5 className="card-title">Gyulladáscsökkentés</h5>
                <p className="card-text">
                  A piócaterápia csökkenti a gyulladást és elősegíti a gyorsabb
                  gyógyulást.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer bg-dark text-light py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h5>Magamról</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col-6">
              <h5>Contact</h5>
              <address>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@example.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Safe;
