import React from "react";
import "../App.css";
import Footer from "./Footer";

function Safe() {
  return (
    <div className="teljes">
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded"
              style={{ width: "50%" }}
              src="/images/safe-laser2.jpg"
              alt="safe-laser.jpg"
            />
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div class="p-2 m-auto">
              <h5>Safe Laser</h5>
              <p>
                The Safe Laser 1800 Infra's infrared (808nm) light penetrates
                deeply into tissues, up to a depth of 10 cm, making it excellent
                for treating musculoskeletal disorders. The laser light
                activates ATP production, which is the basis of energy
                production in cells.
              </p>
              <br />
              <p className="card-text">
                Its biostimulatory effect stimulates the regeneration of cells
                and tissues, thereby accelerating the regeneration of nerve
                connections and enhancing the strength of signals transmitted
                along nerve fibers. Its biological effects include pain relief,
                anti-inflammatory properties, and accelerating the healing of
                muscles, tendons, and joints. At higher doses, it may even be
                suitable for regenerating joint cartilage surfaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 shadow w-75 m-auto mt-3">
              <img
                src="/images/safe-laser.jpg"
                className="card-img-top"
                alt="safe-laser2.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
}

export default Safe;
