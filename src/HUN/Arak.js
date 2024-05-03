import Footer from "./Footer";

function Arak() {
    return (
        <div>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card custom-border">
                            <img
                                src="/images/baba.jpg"
                                className="card-img-top"
                                alt="nls"
                            />
                            <div className="card-body">
                                <h5 className="card-title">NLS diagnosztika</h5>
                                <p className="card-text">
                                    E technológia átfogó elemzést tesz lehetővé az emberi test
                                    minden szervéről és rendszeréről. Ősi gyógyító hagyományokra
                                    épít, miközben a modern tudományos kutatások eredményeire is
                                    támaszkodik.
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        10.000 Ft / óra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card custom-border">
                            <img
                                src="/images/plasma-generator.jpg"
                                className="card-img-top"
                                alt="plasma-generator"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Frekvencia generátor</h5>
                                <p className="card-text">
                                    A frekvenciaterápia (plazmagenerátoros kezelés) olyan módszer,
                                    amelyben a rezgések alkalmazásával kioltják az élősködőket,
                                    kórokozókat, különböző mikroorganizmusokat, miközben
                                    harmonizálják és támogatják a szervezetet.
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        10.000 Ft / óra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card custom-border">
                            <img
                                src="/images/safe-laser.jpg"
                                className="card-img-top"
                                alt="safe-laser"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Safe laser</h5>
                                <p className="card-text">
                                    A Safe Laser 1800 Infra infravörös (808nm-es) fénye rendkívül
                                    mélyen hatol a szövetekbe, akár 10 cm-es mélységig is,
                                    kiválóan alkalmazható a mozgásszervi betegségek terápiájában.
                                    A lézerfény aktiválja az ATP termelődését, mely az
                                    energiatermelés alapja a sejtekben.
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        10.000 Ft / óra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card custom-border">
                            <img
                                src="/images/piroca_magide.jpg"
                                className="card-img-top"
                                alt="pioca-terapia"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Pióca terápia</h5>
                                <p className="card-text">
                                    A hidroterápia hatékony és mellékhatások nélküli módszer
                                    különféle betegségek kezelésére, elsősorban érrendszeri
                                    problémáknál alkalmazzák, a nyirok keringés serkentésére,
                                    segít felszabadítani a méreganyagokat.
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-auto text-center">
                                        10.000 Ft / óra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Arak;
