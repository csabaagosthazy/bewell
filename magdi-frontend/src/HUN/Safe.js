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
              <h5>Safe laser</h5>
              <p>
                A Safe Laser 1800 infravörös (808nm-es) fénye rendkívül
                mélyen hatol a szövetekbe, akár 10 cm-es mélységig is, kiválóan
                alkalmazható a mozgásszervi betegségek terápiájában. A lézerfény
                aktiválja az ATP termelődését, mely az energiatermelés alapja a
                sejtekben.
              </p>
              <br />
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
