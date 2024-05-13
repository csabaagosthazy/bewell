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
              <h5>NLS Diagnosztika</h5>
              <p>
                E technológia átfogó elemzést tesz lehetővé az emberi test
                minden szervéről és rendszeréről. Ősi gyógyító hagyományokra
                épít, miközben a modern tudományos kutatások eredményeire is
                támaszkodik.
              </p>
              <br />
              <h5 className="card-title text-center">Magába foglalja a:</h5>
              <div className="card-text">
                <ul>
                  <li>
                    Gasztroentrológiát, ami az emésztőrendszerrel kapcsolatos
                  </li>
                  <li>
                    Pulmonólógiát ami a tüdővel és légzőrendszerrel kapcsolatos
                  </li>
                  <li>
                    Nőgyógyászati panaszokat és elváltozásokat: ciszta, nemi
                    betegségek, endometriózis kimutatását
                  </li>
                  <li>
                    Endokrinológiát, ami a szervezet hormonháztartását: pajzsmirigy,
                    agyalapi mirigy, petefészek, herék, mellékvese állapotát vizsgálja.
                  </li>
                  <li>
                    Mikroorganizmusok vizsgálatát: a baktériumok, gombák,
                    paraziták, a vírus fertőzések jelenlétét és kezelési
                    lehetőségeit mutatja
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
