import Footer from "./Footer";

function Arak() {
  return (
    <div className="teljes">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 mb-md-0">
            <div className="mt-4">
              <div className="card-body">
                <h3>Prices valid in Balatonalmádi</h3>
                <ul>
                  <h5 className="card-title">NLS diagnostics</h5>
                  <li>Between 60 and 90 minutes, depending ont he symptoms presented - 15.000 HUF</li>
                  <br />
                  <h5 className="card-title">Frequency therapy</h5>
                  <li>60 minutes - 10.000 HUF</li>
                  <br />
                  <h5 className="card-title">Safe laser treatment</h5>
                  <li>40 minutes - 6.000 HUF</li>
                  <br />
                  <h5 className="card-title">Leech therapy</h5>
                  <li>Between 30 and 90 minutes - 12.000 HUF</li>
                  <li>
                    The basic treatment includes 2 leeches, if additional
                    leeches are needed - 1.500 HUF / piece
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
