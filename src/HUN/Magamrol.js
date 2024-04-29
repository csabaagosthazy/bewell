import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function Magamrol() {

  return (
    <div>
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded border"
              style={{ width: "20rem" }}
              src="images/magamrol.jpg"
              alt="magamrol.jpg"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>Magamről</h5>
              <p>
                Üdvözlöm! Kozma Magdolna vagyok, évtizedek óta az egészséges
                életmód híve, mind saját magam, mind pedig a szeretteim körében.
                Engem már gyermekkoromban az otthoni környezetben felnőve
                bevezettek a népi gyógymódok világába, a természet kínálta
                öngyógyító lehetőségekbe, amiket azóta is gyakorlok. Így ezek az
                ismeretek mélyen gyökereznek bennem, szorosan összefonódtak
                mindennapi életemmel.
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
                <p className="card-text">
                  Azért választottam a honlapomon felsorolt fizikai és közérzet
                  javító terápiákat és azért merültem el bennük, mert
                  szenvedélyesen érdekel az egészség, szeretnék másoknak is
                  segíteni abban, hogy megismertessem, hogyan lehet a
                  hagyományos módszereket és a modern technológia eszközeit
                  kombinálva javítani az egészségi állapotukon.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <img
                src="images/bgnd.jpeg"
                className="card-img-top"
                alt="bgnd.jpeg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* További tartalom Lorem Ipsummal */}
      {/* ... */}

      <Footer />
    </div>
  );
}

export default Magamrol;
