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
              src="/images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>Magamról</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                quam voluptates labore impedit, deserunt iste! Aspernatur earum
                dolore quis exercitationem, facere, officiis odio assumenda nemo
                reiciendis vero eaque rem quidem.
              </p>
              <button class="btn btn-primary">
                <Link className="nav-link" to="/NLS">
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
            <div className="col p-3">
              <br />
              <h5 className="text-center">NLS diagnosztika</h5>
              <p className="m-2 text-start">
                Az NLS technológia új korszakot nyit az egészségügyben, kínálva egy hatékony és pontos eszközt a diagnózis és terápia terén. Összehasonlítva a hagyományos képalkotó módszerekkel, az NLS technológia kiemelkedő pontosságot és sokoldalúságot biztosít az emberi test elemzésében.
              </p>

              <button class="btn btn-primary m-3">
                <Link className="nav-link" to="/NLS">
                  Tovább olvasom
                </Link>
              </button>
              <br />
              <img src="images/sample.jpeg" className="rounded" alt="" />
            </div>
            <div className="col p-3">
              <br />
              <h5>Pióca terápia</h5>
              <p className="m-2">
                A hirudoterápia hatékony és mellékhatások nélküli módszer különféle betegségek kezelésére, elsősorban érrendszeri problémáknál alkalmazzák. A piócák segítenek enyhíteni a véráramlást, normalizálni a vérnyomást és kezelni a vérrögképződéssel kapcsolatos betegségeket. Emellett hatékonyak az aranyér, ízületi problémák, idegrendszeri betegségek és bőrbetegségek kezelésében is. A piócák segítséget nyújtanak a fertőző betegségek kezelésében és az immunrendszer erősítésében is. A hirudoterápia széles körben alkalmazható és jó eredményeket mutat, valamint kozmetikai célokra is felhasználható.
              </p>
              <button class="btn btn-primary m-3">
                <Link className="nav-link" to="/Pioca">
                  Tovább olvasom
                </Link>
              </button>
              <br />
              <img src="images/sample.jpeg" className="rounded" alt="" />
            </div>
            <div className="col p-3">
              <br />
              <h5 className="text-center">Safe laser</h5>
              <p className="m-2 text-end">
                A Safe Laser 1800 Infra infravörös (808nm-es) fénye rendkívül mélyen hatol a szövetekbe, akár 10 cm-es mélységig is, kiválóan alkalmazható a mozgásszervi betegségek terápiájában. Ennek biológiai hatása fájdalomcsillapító, gyulladáscsökkentő és gyorsítja az izmok, inak, ízületek gyógyulását. Nagyobb dózis esetén akár az ízületi porcfelszínek regenerálására is alkalmas.
              </p>
              <button class="btn btn-primary m-3">
                <Link className="nav-link" to="/Safe">
                  Tovább olvasom
                </Link>
              </button>
              <br />
              <img src="images/sample.jpeg" className="rounded" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-75 m-auto mt-4">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Frekvencia terápia</h3>
            <div class="row">
              <div className="col">
                <p className="text-start">
                  A szervezetünkben minden folyamatos mozgásban van, és minden, még a legapróbb alkotóelem is rezeg. A rezonancia, vagyis a gerjesztett rezgés jelentőségét egyszerű példákon keresztül is könnyű megérteni. Az inga vagy a hangvillák rezgése szemlélteti, hogy hogyan képes egy rezonáns rendszer megváltoztatni a környezetét.
                </p>
              </div>
              <div className="col">
                <p className="text-start">
                  A frekvenciakezelés olyan módszer, amelyben a rezgések alkalmazásával kioltják az élősködőket és a kórokozókat, miközben harmonizálják és támogatják a szervezet működését. Bár sokan hajlamosak úgy gondolni, hogy ez csupán hókuszpókusz, valójában a frekvenciakezelés mögött a fizika áll, amelynek alapjai ma már tudományosan is alátámasztottak.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <p>
              A tudomány már régóta ismeri és alkalmazza az emberi gyógyításban a hangok erejét. Számos vallási szertartás tartalmaz meghatározott énekeket és hangeffektusokat, amelyek célja a közérzet javítása és a test-lelkünk feltöltése. Az emberiség évezredek óta használja a hangok gyógyító hatását, és most már pontosan tudjuk, hogy ezeknek a jelenségeknek mi az alapja. Frekvenciákat pedig létre lehet hozni vagyis lehet generálni hangokkal, frekvenciagenerátorral.
            </p>
            <button class="btn btn-primary m-3">
                <Link className="nav-link" to="/Frekvencia">
                  Tovább olvasom
                </Link>
              </button>
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
