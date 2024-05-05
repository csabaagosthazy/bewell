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
                Das Safe Laser 1800 Infra-Infrarotlicht (808 nm) dringt äußerst
                tief in das Gewebe ein, bis zu einer Tiefe von 10 cm, und ist
                hervorragend geeignet zur Therapie von Bewegungsstörungen. Das
                Laserlicht aktiviert die ATP-Produktion, die die Grundlage für
                die Energiegewinnung in den Zellen bildet.
              </p>
              <br />
              <p className="card-text">
                Seine biostimulierende Wirkung fördert die Regeneration von
                Zellen und Geweben, beschleunigt die Regeneration von
                Nervenverbindungen und verstärkt die Stärke der an Nervenfasern
                übertragenen Signale. Seine biologische Wirkung ist
                schmerzlindernd, entzündungshemmend und beschleunigt die Heilung
                von Muskeln, Sehnen und Gelenken. Bei höheren Dosen kann es
                sogar zur Regeneration von Gelenkknorpelflächen geeignet sein.
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
