import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
    <div>
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
              <h5>NLS Diagnosztika</h5>
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">NLS diagnosztika</h5>
              <p className="m-2 text-start">
                Az NLS diagnosztikai rendszer egyedülálló lehetőséget kínál a
                szervezet állapotának teljes körű vizsgálatára, az energetikai
                egyensúly felmérésétől a különböző szervrendszerek működésének
                elemzéséig.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <img
                src="https://via.placeholder.com/300"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 order-md-1">
            <div className="p-3">
              <img
                src="https://via.placeholder.com/300"
                className="rounded"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 order-md-2">
            <div className="p-3">
              <h3 className="text-center">Frekvencia terápia</h3>
              <p className="text-start">
                A frekvencia terápia az egyik leghatékonyabb módszer a test
                energetikai egyensúlyának helyreállítására és a betegségek
                kezelésére. Az alacsony frekvenciás rezgések segítenek a sejtek
                regenerálódásában és a test energetikai mezőjének
                harmonizálásában.
              </p>
              <p className="text-start">
                A frekvencia terápia alkalmazása során különböző frekvenciájú
                rezgések segítségével céltudatosan befolyásolhatjuk a test
                energiamezőjét és támogathatjuk az öngyógyító folyamatokat. A
                kezelés hatékony és fájdalommentes, és számos egészségügyi
                probléma esetén segíthet a gyógyulásban.
              </p>
              <p className="text-start">
                A frekvencia terápia egyre népszerűbbé válik a holisztikus
                gyógyítás területén, és számos pozitív hatással rendelkezik az
                egészségre és az életminőségre.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-75 m-auto mt-4">
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-center">Frekvencia terápia</h3>

            <div className="row">
              <div className="col">
                <p className="text-start">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores expedita, ex dolor animi delectus quisquam aliquam
                  quam nobis necessitatibus, iure repellat alias quaerat
                  dignissimos porro non. Asperiores officiis quidem
                  exercitationem!
                </p>
              </div>
              <div className="col">
                <p className="text-start">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores expedita, ex dolor animi delectus quisquam aliquam
                  quam nobis necessitatibus, iure repellat alias quaerat
                  dignissimos porro non. Asperiores officiis quidem
                  exercitationem!
                </p>
              </div>
            </div>
            <div className="row">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                rerum, aperiam est quam in error impedit nemo, ratione, magnam
                voluptate qui. Fugit cum magnam sint quos officia sapiente
                commodi cupiditate.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="slider m-auto">
              <Slider {...settings}>
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
              </Slider>
              <br />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-dark text-light py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h5>Rólunk</h5>
              <p>
                Az NLS Terápia csapatával együtt dolgozunk azon, hogy az
                egészség és a harmonikus élet mindenki számára elérhetővé
                váljon. Célunk, hogy segítsünk az embereknek megtalálni az
                egyensúlyt testük, lelkük és környezetük között.
              </p>
            </div>
            <div className="col-6">
              <h5>Kapcsolat</h5>
              <address>
                <p>Telefon: 123-456-7890</p>
                <p>Email: info@nlsterapia.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NLS;
