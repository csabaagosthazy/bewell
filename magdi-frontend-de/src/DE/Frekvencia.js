import Footer from "./Footer";

function Frekvencia() {
  return (
    <div className="teljes">
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded"
              style={{ width: "75%" }}
              src="images/plasma-generator.jpg"
              alt="plasma-generator.JPG"
            />
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div class="p-2 m-auto">
              <h5>Frequenztherapie</h5>
              <p>
                Die Frequenztherapie (Plasmageneratorenbehandlung) ist eine
                Methode, bei der durch die Anwendung von Schwingungen Parasiten,
                Krankheitserreger und verschiedene Mikroorganismen neutralisiert
                werden, während gleichzeitig der Körper harmonisiert und
                unterstützt wird.
              </p>
              <br />
              <p className="card-text">
                Während der Behandlung identifiziert das Gerät die Schwingungen,
                die Krankheiten verursachen, und verwendet diese spezifischen
                Frequenzen, um die Krankheitserreger zu neutralisieren. Diese
                gezielten Schwingungen bringen die Zellwand und Membran der
                Mikroorganismen in Schwingung, die die zunehmende Schwingung
                nicht ertragen können und schließlich reißen. Dadurch wird der
                Mikroorganismus zerstört bzw. deaktiviert!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="kitolto"></div>
      <div className="kitolto"></div>
      <div className="kitolto"></div>

      <br />
      <br />

      <Footer />
    </div>
  );
}

export default Frekvencia;
