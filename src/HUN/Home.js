import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Home() {
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
              style={{ width: "20rem" }}
              src="/images/magamrol.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>Magamról</h5>
              <p>
                Üdvözlöm! Kozma Magdolna vagyok, évtizedek óta az egészséges
                életmód híve, mind saját magam, mind pedig a szeretteim körében.
                Engem már gyermekkoromban az otthoni környezetben felnőve
                bevezettek a népi gyógymódok világába, a természet kínálta
                öngyógyító lehetőségekbe, amiket azóta is gyakorlok. Így ezek az
                ismeretek mélyen gyökereznek bennem, szorosan összefonódtak
                mindennapi életemmel.
              </p>
              <button class="btn btn-primary">
                <Link className="nav-link" to="/Magamrol">
                  Tovább olvasom
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-100 p-3">
          <div className="row row-cols-1 row-cols-md-3 text-center">
            <div className="col-md p-3">
              <br />
              <h5 className="text-center">NLS diagnosztika</h5>
              <p className="m-2 text-start">
                E technológia átfogó elemzést tesz lehetővé az emberi test
                minden szervéről és rendszeréről. Ősi gyógyító hagyományokra
                épít, miközben a modern tudományos kutatások eredményeire is
                támaszkodik.
              </p>

              <button class="btn btn-primary m-3">
                <Link className="nav-link" to="/NLS">
                  Tovább olvasom
                </Link>
              </button>
              <br />
              <img
                src="/images/nls.jpg"
                style={{ width: "15rem" }}
                className="rounded"
                alt=""
              />
            </div>
            <div className="col-md p-3">
              <br />
              <h5>Pióca terápia</h5>
              <p className="m-2">
                A hidroterápia hatékony és mellékhatások nélküli módszer
                különféle betegségek kezelésére, elsősorban érrendszeri
                problémáknál alkalmazzák, a nyirok keringés serkentésére, segít
                felszabadítani a méreganyagokat.
              </p>
              <button class="btn btn-primary m-3">
                <Link className="nav-link" to="/Pioca">
                  Tovább olvasom
                </Link>
              </button>
              <br />
              <img
                src="images/pioca.jpeg"
                style={{ width: "15rem" }}
                className="rounded"
                alt=""
              />
            </div>
            <div className="col-md p-3">
              <br />
              <h5 className="text-center">Safe laser</h5>
              <p className="m-2 text-end">
                A Safe Laser 1800 Infra infravörös (808nm-es) fénye rendkívül
                mélyen hatol a szövetekbe, akár 10 cm-es mélységig is, kiválóan
                alkalmazható a mozgásszervi betegségek terápiájában. A lézerfény
                aktiválja az ATP termelődését, mely az energiatermelés alapja a
                sejtekben.
              </p>
              <button class="btn btn-primary m-3">
                <Link className="nav-link" to="/Safe">
                  Tovább olvasom
                </Link>
              </button>
              <br />
              <img
                style={{ width: "15rem" }}
                src="/images/safe-laser.jpg"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-75 m-auto mt-4">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Frekvencia terápia</h3>
            <div class="row">
              <p className="text-start">
                A frekvenciaterápia (plazmagenerátoros kezelés) olyan módszer,
                amelyben a rezgések alkalmazásával kioltják az élősködőket,
                kórokozókat, különböző mikroorganizmusokat, miközben
                harmonizálják és támogatják a szervezetet. A kezelés során a gép
                azonosítja a betegségeket okozó rezgéseket, majd ezeket a
                sajátos frekvenciákat használja föl a kórokozók kioltására. Ezek
                az irányított rezgések lengésbe hozzák a mikroorganizmus
                sejtfalát, membránját, azok nem bírják elviselni a növekvő
                lengést és egy idő után megrepednek. Ezzel a mikroorganizmus
                elpusztul, azaz deaktiválódik!
              </p>
              <img
                src="/images/plasma-generator.jpg"
                style={{ width: "25rem" }}
                className="rounded m-auto"
                alt=""
              />
              <button class="btn btn-primary mt-3">
                <Link className="nav-link" to="/Frekvencia">
                  Tovább olvasom
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
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

export default Home;
