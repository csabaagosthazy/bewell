import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Impresszum() {
  return (
    <div className="teljes">
      <div className="background-magamrol">
        <div className="row">
          <div className="col-md-7 col-lg-7 col-xl-7 p-3 m-auto">
            <div class="w-100 card border-0 shadow p-2 m-auto">
              <h5>Impresszum és jogi vonatkozások</h5>
              <p>
                Örülök, hogy meglátogat. Kérem, vegye figyelembe a következőket.
              </p>

              <ul>
                <li>
                  A{" "}
                  <span
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    <Link to="/"  style={{color: "black",}}>https://legyjolkozpont.hu</Link>
                  </span>{" "}
                  felelős üzemeltetője Kozma Magdolna 8220 Balatonalmádi.
                </li>
                <li>
                  A{" "}
                  <span
                    style={{ color: "black", textDecoration: "underline", fontWeight: "bold" }}
                  >
                    <Link to="/" style={{color: "black",}}>https://legyjolkozpont.hu</Link>
                  </span>{" "}
                  tisztán magánjellegű tájékoztatás. Nem "sajtó- vagy
                  médiaszolgáltató".
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h3 className="text-center">Szerzői jog © Copyright </h3>
                <p className="card-text">
                  Kozma Magdolna, Balatonalmádi (Magyarország). Minden jog
                  fönntartva. Valamennyi a honlapon látható szöveg és felvétel
                  saját készítésű. Szöveg, képek, ábrák, valamint mindennek
                  elrendezése a https://legyjolkozpont.hu-n a szerzői jogra vonatkozó
                  és további törvények védelme alatt áll.
                </p>
                <br />
                <h3 className="text-center">Minden felelősség kizárva</h3>
                <p class="card-text">
                  Az üzemeltető oldalait a lehető legnagyobb gonddal állította
                  össze. Ennek ellenére nem garantálhatja a közölt adatok
                  maradéktalan hibátlanságát és pontosságát. Az üzemeltető
                  ezennel kizár minden kártérítést, amely ezen oldalak
                  felhasználása során közvetlenül vagy közvetve felmerülhet.
                </p>
                <br />
                <h3 className="text-center">Külső kapcsolatok (linkek)</h3>
                <p class="card-text">
                  Amennyiben erről az internetlapról más lapokra utaló
                  kapcsolatok erednek, amelyeket harmadik személy bocsát
                  rendelkezésre, azok tartalmáért e lap üzemeltetője nem
                  vállalhat felelősséget.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="card border-0 shadow">
              <img
                src="images/udvozlunk.jpg"
                className="card-img-top"
                alt="bgnd.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Impresszum;
