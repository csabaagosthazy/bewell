import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function Magamrol() {
  return (
    <div className="teljes">
      <div className="background">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 p-3 m-auto">
            <div class="p-2">
              <h5>Über mich</h5>
              <p>
                Herzlich willkommen! Ich bin Magdolna Kozma und seit Jahrzehnten
                ein Anhänger eines gesunden Lebensstils, sowohl für mich als
                auch für meine Lieben. Bereits in meiner Kindheit wurde ich in
                die Welt der Volksheilmittel eingeführt, die die Natur bietet,
                und ich praktiziere sie seitdem. Diese Kenntnisse sind tief in
                mir verwurzelt und sind fest mit meinem täglichen Leben
                verbunden.
              </p>
              <br />
              <p className="card-text">
                Ich habe die auf meiner Website aufgeführten körperlichen und
                Wohlfühltherapien ausgewählt und mich in sie vertieft, weil mich
                Gesundheit leidenschaftlich interessiert. Ich möchte anderen
                helfen, zu erfahren, wie man durch die Kombination
                traditioneller Methoden und moderner Technologien die eigene
                Gesundheit verbessern kann.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded"
              style={{ width: "75%" }}
              src="images/magamrol.jpg"
              alt="magamrol.jpg"
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 mt-3">
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

export default Magamrol;
