import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Frekvencia() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="btn btn-primary slick-prev">Previous</button>,
    nextArrow: <button className="btn btn-primary slick-next">Next</button>,
  };

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
              A frekvenciakezelés olyan módszer, amelyben a rezgések alkalmazásával kioltják az élősködőket és a kórokozókat, miközben harmonizálják és támogatják a szervezet működését. Bár sokan hajlamosak úgy gondolni, hogy ez csupán hókuszpókusz, valójában a frekvenciakezelés mögött a fizika áll, amelynek alapjai ma már tudományosan is alátámasztottak.
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
                <h5 className="card-title text-center">ADJ CÍMET</h5>
                <p className="card-text">
                A tudomány már régóta ismeri és alkalmazza az emberi gyógyításban a hangok erejét. Számos vallási szertartás tartalmaz meghatározott énekeket és hangeffektusokat, amelyek célja a közérzet javítása és a test-lelkünk feltöltése. Az emberiség évezredek óta használja a hangok gyógyító hatását, és most már pontosan tudjuk, hogy ezeknek a jelenségeknek mi az alapja. Frekvenciákat pedig létre lehet hozni vagyis lehet generálni hangokkal, frekvenciagenerátorral.
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
                ADJ CÍMET
              </h3>
              <blockquote className="blockquote">
                <p className="mb-0">
                A szervezetünkben minden folyamatos mozgásban van, és minden, még a legapróbb alkotóelem is rezeg. A rezonancia, vagyis a gerjesztett rezgés jelentőségét egyszerű példákon keresztül is könnyű megérteni. Az inga vagy a hangvillák rezgése szemlélteti, hogy hogyan képes egy rezonáns rendszer megváltoztatni a környezetét.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">ADJ CÍMET</h5>
              <p className="m-2 text-start">
              Szervezetünk nagy része víz, és minden sejtnek saját elektromágneses rezonanciája van. A harmonikus együttműködésnek köszönhetően építik fel a szerveket és a szervrendszereket. A frekvenciaterápia alapját képező tudományos felfedezéseknek köszönhetően ma már világosabb a kép arról, hogy miként befolyásolhatók és támogathatók a szervezet saját rezgései.
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
            <p>
              A frekvenciakezelés során azonosítva van a betegségeket okozó rezgések, majd ezek a sajátos frekvenciák vannak felhasználva a kórokozók kioltására. Ezek az irányított rezgések lengésbe hozzák a mikroorganizmus sejtfalát, membránját nem bírják elviselni a növekvő lengést és egy idő után megrepednek. Ezzel a mikroorganizmus elpusztul, az az deaktiválódik!
            </p>
            <div class="p-3">
                <p>
                Az 1920-as években Raymond Royal Rife és George Lakhowsky dolgozták ki a frekvenciakezelés alapjait, melyeket korukban csodabogaraknak tartottak. Ők határozták meg a vírusok és kórokozók pusztító frekvenciáit, és fejlesztették ki azokat a módszereket, amelyekkel kizárólag a támadni kívánt élősködőkre lehetett hatást gyakorolni.
                </p>
                <div class="row">
                  <div class="col">
                    <div className="slider m-auto">
                      <Slider {...settings}>
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                      </Slider>
                      <br />
                    </div>
                  </div>
                  <div class="col">
                    <p>
                      Az eljárásnak nincs kockázata, és számos esetben eredményesnek bizonyult, még olyan betegeknél is, akik már feladták a gyógyulás reményét. A frekvenciakezelés egy ígéretes módszer, amely jelentős változásokat hozhat az emberi általános közérzet és jólét érdekében.
                    </p>
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
