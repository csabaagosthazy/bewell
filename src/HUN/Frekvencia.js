import { Link } from "react-router-dom";

function Frekvencia() {
  return (
    <div>
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded border"
              src="images/sample.jpeg"
              alt="Leech Therapy"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>Frekvencia terápia</h5>
              <p>
                A pióca terápia évszázadok óta használt gyógymód, melynek során
                a piócák vérrel táplálkoznak, és bizonyítottan pozitív hatással
                lehetnek számos egészségügyi problémára.
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
                <h5 className="card-title text-center">Hogyan működik?</h5>
                <p className="card-text">
                  Ismerje meg a piócák titkát: a nyálukban rejlő enzimek
                  csodálatos hatását, amelyek a vér áramlását serkentik és
                  gyógyító erővel bírnak.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <img
                src="images/sample.jpeg"
                className="card-img-top"
                alt="Leech Therapy Process"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="testimonial bg-light p-4">
              <h3 className="text-center mb-4">
                Egy elégedett páciens vallomása
              </h3>
              <blockquote className="blockquote">
                <p className="mb-0">
                  "A pióca terápia nem csak a lábdagadásommal végzett csodát, de
                  újra táncolni is tudok! Köszönöm, hogy visszaadtátok a mozgás
                  örömét!"
                </p>
                <br />
                <footer className="blockquote-footer">
                  Kovács Katalin, Budapest
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">Hogyan működik?</h5>
              <p className="m-2 text-start">
                A piócák nyálukban olyan enzimeket tartalmaznak, amelyek
                véralvadásgátló hatással rendelkeznek. Ezáltal segíthetnek
                csökkenteni a vérrögképződést és javítani a vérkeringést.
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
        <div>
            <div class="p-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea autem recusandae blanditiis fuga necessitatibus maxime sequi, soluta voluptates, mollitia laboriosam voluptate corporis natus. Sequi at vitae, accusamus officiis perspiciatis consequatur.</p>
            </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center mb-4">Szolgáltatásaink</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="service-item text-center p-3">
                  <h5>Lábdagadás kezelése</h5>
                  <p>
                    A pióca terápia segítségével enyhíthető a lábdagadás,
                    javítva az életminőséget.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item text-center p-3">
                  <h5>Magas vérnyomás</h5>
                  <p>
                    Természetes módszer a vérnyomás szabályozására,
                    mellékhatások nélkül.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item text-center p-3">
                  <h5>Migrén megelőzése</h5>
                  <p>
                    Csökkentse a migrénes fejfájások gyakoriságát és
                    intenzitását.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Rólunk</h5>
              <p>
                A hagyomány és innováció találkozása: szakértőink a legmodernebb
                technikákat alkalmazzák a természetes gyógyítás szolgálatában.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Kapcsolat</h5>
              <address>
                <strong>Telefon:</strong> 123-456-7890
                <br />
                <strong>Email:</strong> info@piocaterapia.com
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Frekvencia;
