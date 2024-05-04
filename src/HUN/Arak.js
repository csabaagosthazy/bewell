import Footer from "./Footer";
import Slider from "react-slick";

function Arak() {
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
        <div className="teljes">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card custom-border mt-4">
                            {/* <img
                                src="/images/baba.jpg"
                                className="card-img-top"
                                alt="nls"
                            /> */}
                            <div className="card-body">
                                <h5 className="card-title">NLS diagnosztika</h5>
                                {/* <p className="card-text">
                                    E technológia átfogó elemzést tesz lehetővé az emberi test
                                    minden szervéről és rendszeréről. Ősi gyógyító hagyományokra
                                    épít, miközben a modern tudományos kutatások eredményeire is
                                    támaszkodik.
                                </p> */}
                                <p className="text-center">60 és 90 perc</p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        15.000 Ft
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card custom-border mt-4">
                            {/* <img
                                src="/images/plasma-generator.jpg"
                                className="card-img-top"
                                alt="plasma-generator"
                            /> */}
                            <div className="card-body">
                                <h5 className="card-title">Frekvencia terápia</h5>
                                {/* <p className="card-text">
                                    A frekvenciaterápia (plazmagenerátoros kezelés) olyan módszer,
                                    amelyben a rezgések alkalmazásával kioltják az élősködőket,
                                    kórokozókat, különböző mikroorganizmusokat, miközben
                                    harmonizálják és támogatják a szervezetet.
                                </p> */}
                                <div className="text-center">
                                    <p className="text-center">60 perc</p>
                                    <button className="btn btn-primary m-auto text-center">
                                        10.000 Ft
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card custom-border mt-4">
                            {/* <img
                                src="/images/safe-laser.jpg"
                                className="card-img-top"
                                alt="safe-laser"
                            /> */}
                            <div className="card-body">
                                <h5 className="card-title">Safe laser kezelés</h5>
                                {/* <p className="card-text">
                                    A Safe Laser 1800 Infra infravörös (808nm-es) fénye rendkívül
                                    mélyen hatol a szövetekbe, akár 10 cm-es mélységig is,
                                    kiválóan alkalmazható a mozgásszervi betegségek terápiájában.
                                    A lézerfény aktiválja az ATP termelődését, mely az
                                    energiatermelés alapja a sejtekben.
                                </p> */}
                                <p className="text-center">40 perc</p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        6.000 Ft
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card custom-border mt-4">
                            {/* <img
                                src="/images/piroca_magide.jpg"
                                className="card-img-top"
                                alt="pioca-terapia"
                            /> */}
                            <div className="card-body">
                                <h5 className="card-title">Pióca kezelés</h5>
                                {/* <p className="card-text">
                                    A hidroterápia hatékony és mellékhatások nélküli módszer
                                    különféle betegségek kezelésére, elsősorban érrendszeri
                                    problémáknál alkalmazzák, a nyirok keringés serkentésére,
                                    segít felszabadítani a méreganyagokat.
                                </p> */}
                                <p className="text-center">30 és 90 perc között</p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        12.000 Ft
                                    </button>
                                </div>
                                <p className="text-center">Az alapkezelésben 2db pióca van, amennyiben szükség lenne további piócára</p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        1.500 Ft / db
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div class="container w-25 d-none d-md-block">
                <Slider {...settings}>
                <img src="images/plasma-generator.jpg" className="rounded" alt="plasma-generator" />
                <img src="images/baba.jpg" className="rounded" alt="baba" />
                <img src="images/udvozlunk.jpg" className="rounded" alt="udvozlunk" />
                <img src="images/nls_bacsi.jpg" className="rounded" alt="background" />
                <img src="images/piroca_magide.jpg" className="rounded" alt="background" />
                <img src="images/baba+magdi2.jpg" className="rounded" alt="background" />
                </Slider>
            </div>
            <Footer />
        </div>
    );
}

export default Arak;
