import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function Magamrol() {

  return (
    <div className="teljes">
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded"
              style={{ width: "75%" }}
              src="images/magamrol.jpg"
              alt="magamrol.jpg"
            />
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div class="p-2 m-auto">
              <h5>Magamról</h5>
              <p>
                Üdvözlöm! Kozma Magdolna vagyok, évtizedek óta az egészséges
                életmód híve, mind saját magam, mind pedig a szeretteim körében.
                Engem már gyermekkoromban az otthoni környezetben felnőve
                bevezettek a népi gyógymódok világába, a természet kínálta
                öngyógyító lehetőségekbe, amiket azóta is gyakorlok. Így ezek az
                ismeretek mélyen gyökereznek bennem, szorosan összefonódtak
                mindennapi életemmel.
              </p>
              <br />
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

      {/* További tartalom Lorem Ipsummal */}
      {/* ... */}

      <Footer />
    </div>
  );
}

export default Magamrol;
