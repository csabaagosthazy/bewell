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
              <h5>Frekvencia terápia</h5>
              <p>
                A frekvenciaterápia (plazmagenerátoros kezelés) olyan módszer,
                amelyben a rezgések alkalmazásával kioltják az élősködőket,
                kórokozókat, különböző mikroorganizmusokat, miközben
                harmonizálják és támogatják a szervezetet.
              </p>
              <br />
              <p className="card-text">
                A kezelés során a gép azonosítja a betegségeket okozó
                rezgéseket, majd ezeket a sajátos frekvenciákat használja föl a
                kórokozók kioltására. Ezek az irányított rezgések lengésbe
                hozzák a mikroorganizmus sejtfalát, membránját, azok nem bírják
                elviselni a növekvő lengést és egy idő után megrepednek. Ezzel a
                mikroorganizmus elpusztul, azaz deaktiválódik!
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
