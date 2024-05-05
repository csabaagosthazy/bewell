import Footer from "./Footer";

function Arak() {
  return (
    <div className="teljes">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 mb-md-0">
            <div className="mt-4">
              <div className="card-body">
                <h3>Balatonalmádi aktuelle Preise</h3>
                <ul>
                  <h5 className="card-title">NLS Diagnostik</h5>
                  <li>60 und 90 Minuten - 15.000 Ft</li>
                  <br />
                  <h5 className="card-title">Frequenztherapie</h5>
                  <li>60 Minuten - 10.000 Ft</li>
                  <br />
                  <h5 className="card-title">Safe-Laserbehandlung</h5>
                  <li>40 Minuten - 6.000 Ft</li>
                  <br />
                  <h5 className="card-title">Blutegeltherapie</h5>
                  <li>30 bis 90 Minuten - 12.000 Ft</li>
                  <li>
                    In der Grundbehandlung sind 2 Blutegel enthalten. Bei Bedarf
                    weitere Blutegel - 1.500 Ft / Stück
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0"></div>
          <div className="col-md-6"></div>
        </div>
      </div>

      <div className="kitolto d-none d-md-block"></div>
      <div className="kitolto d-none d-md-block"></div>
      <div className="kitolto d-none d-md-block"></div>
      <div className="kitolto"></div>
      <div className="kitolto"></div>

      <Footer />
    </div>
  );
}

export default Arak;
