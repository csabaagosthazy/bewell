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
              style={{ width: "20rem" }}
              src="/images/safe-laser.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>Safe laser</h5>
              <p>
                A Safe Laser 1800 Infra infravörös (808nm-es) fénye rendkívül
                mélyen hatol a szövetekbe, akár 10 cm-es mélységig is, kiválóan
                alkalmazható a mozgásszervi betegségek terápiájában. A lézerfény
                aktiválja az ATP termelődését, mely az energiatermelés alapja a
                sejtekben.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <div className="card-body">
                <p className="card-text">
                  Biostimulációs hatása serkenti a sejtek és szövetek
                  regenerálódását, ezáltal felgyorsítja az idegi kapcsolatok
                  regenerációját és fokozza az idegrostokon továbbított jelek
                  erősségét, biológiai hatása fájdalomcsillapító,
                  gyulladáscsökkentő és gyorsítja az izmok, inak, ízületek
                  gyógyulását. Nagyobb dózis esetén akár az ízületi
                  porcfelszínek regenerálására is alkalmas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <img
                src="/images/safe-laser2.jpg"
                className="card-img-top"
                alt="Leech Therapy Process"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mt-4">
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
            <h3 className="text-center">Túlzott hegszövet képződés csökkentése</h3>
            <p className="text-start">
            A lézerterápia hatékonyan csökkenti a vágások, égési sérülések és műtétek utáni túlzott hegszövet képződést. Javítja a sérült terület vérellátását és segíti a salakanyagok eltávolítását, így gyorsítva a gyógyulási folyamatot és minimalizálva a hegszövet kialakulását.
            </p>
          </div>
          <div class="col-6">
            <h3 className="text-center">Idegi működés javítása</h3>
            <p className="text-start">
            A lézerterápia felgyorsítja az idegi kapcsolatok regenerációját és fokozza az idegrostokon továbbított jelek erősségét, ezáltal javítva az idegek és izmok működését. Ennek következtében enyhülnek az idegsérülések tünetei, mint az éles fájdalom vagy a zsibbadás.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">Javuló immunfolyamatok</h5>
              <p className="m-2 text-start">
              A lézerfény aktiválja az ATP termelődését, mely az energiatermelés alapja a sejtekben. Ez fokozza az immunrendszer hatékonyságát, segítve a szervezetet a mikrobák és kórokozók elleni harcban.
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
      </div> */}

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
