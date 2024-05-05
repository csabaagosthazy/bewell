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
              <h5>NLS Diagnostics</h5>
              <p>
                This technology allows comprehensive analysis of every organ and
                system in the human body. It builds on ancient healing
                traditions while also relying on the results of modern
                scientific research.
              </p>
              <br />
              <h5 className="card-title text-center">It includes:</h5>
              <div className="card-text">
                <ul>
                  <li>
                    Gastroenterology, which deals with the digestive system
                  </li>
                  <li>
                    Pulmonology, which deals with the lungs and respiratory
                    system
                  </li>
                  <li>
                    Gynecological complaints and disorders: detection of cysts,
                    sexually transmitted diseases, endometriosis, etc.
                  </li>
                  <li>
                    Endocrinology, the body's hormone balance: assessing the
                    thyroid, pituitary gland, ovaries, testes, adrenal glands,
                    etc.
                  </li>
                  <li>
                    Examination of microorganisms: detects the presence and
                    treatment options of bacteria, fungi, parasites, and viral
                    infections.
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
