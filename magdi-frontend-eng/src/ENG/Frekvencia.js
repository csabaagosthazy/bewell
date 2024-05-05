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
              <h5>Frequency therapy</h5>
              <p>
                Frequency therapy (plasma generator treatment) is a method in
                which parasites, pathogens, and various microorganisms are
                neutralized using vibrations while harmonizing and supporting
                the body.
              </p>
              <br />
              <p className="card-text">
                During the treatment, the machine identifies the vibrations
                causing diseases, then utilizes these specific frequencies to
                neutralize the pathogens. These directed vibrations induce
                oscillation in the cell wall and membrane of microorganisms;
                they cannot withstand the increasing oscillation and eventually
                rupture. As a result, the microorganism is destroyed, i.e.,
                deactivated!
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
