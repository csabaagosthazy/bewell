import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Impresszum() {
  return (
    <div className="teljes">
      <div className="background-magamrol">
        <div className="row">
          <div className="col-md-7 col-lg-7 col-xl-7 p-3 m-auto">
            <div class="w-100 card border-0 shadow p-2 m-auto">
              <h5>Impressum und rechtliche Hinweise</h5>
              <p>
                Ich freue mich, dass Sie vorbeischauen. Bitte beachten Sie
                Folgendes.
              </p>

              <ul>
                <li>
                  Die verantwortliche Betreiberin von{" "}
                  <span
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    <Link to="/" style={{ color: "black" }}>
                      https://legyjolkozpont.at
                    </Link>
                  </span>{" "}
                  ist Magdolna Kozma. Steuernummer: 90136188-1-39
                </li>
                <li>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                  >
                    <Link to="/" style={{ color: "black" }}>
                      https://legyjolkozpont.at
                    </Link>
                  </span>{" "}
                  ist rein privat und dient nur zur Information. Es handelt sich
                  nicht um einen "Presse- oder Mediendienstleister
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
                <h3 class="text-center">Urheberrecht © Copyright</h3>
                <p class="card-text">
                  Magdolna Kozma, Balatonalmádi (Ungarn). Alle Rechte
                  vorbehalten. Alle Texte und Aufnahmen auf der Website sind
                  Eigenproduktion. Texte, Bilder, Grafiken sowie deren Anordnung
                  auf https://legyjolkozpont.at unterliegen dem Urheberrecht und
                  anderen Gesetzen zum Schutz des geistigen Eigentums.
                </p>
                <br />
                <h3 class="text-center">Haftungsausschluss</h3>
                <p class="card-text">
                  Der Betreiber hat die Website mit größter Sorgfalt erstellt.
                  Dennoch kann er nicht garantieren, dass die veröffentlichten
                  Daten vollständig fehlerfrei und genau sind. Der Betreiber
                  schließt hiermit jede Haftung für Schäden aus, die direkt oder
                  indirekt aus der Nutzung dieser Seiten entstehen können.
                </p>
                <br />
                <h3 class="text-center">Externe Verbindungen (Links)</h3>
                <p class="card-text">
                  Sofern von dieser Website aus Verbindungen zu anderen Websites
                  hergestellt werden, die von Dritten bereitgestellt werden,
                  übernimmt der Betreiber keine Verantwortung für deren Inhalt.
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
