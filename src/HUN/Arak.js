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
                    <div className="col-md-12 mb-4 mb-md-0">
                        <div className="card custom-border mt-4">
                            <div className="card-body">
                                <h3>Balatonalmádiban érvényes árak</h3>
                                <ul>
                                    <h5 className="card-title">NLS diagnosztika</h5>
                                    <li>60 és 90 perc - 15.000 Ft</li>
                                    <h5 className="card-title">Frekvencia terápia</h5>
                                    <li>60 perc - 10.000 Ft</li>
                                    <h5 className="card-title">Safe laser kezelés</h5>
                                    <li>40 perc - 6.000 Ft</li>
                                    <h5 className="card-title">Pióca kezelés</h5>
                                    <li>30 és 90 perc között - 12.000 Ft</li>
                                    <li>Az alapkezelésben 2db pióca van, amennyiben szükség lenne további piócárat - 1.500 Ft / db</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
            </div>

            <div className="kitolto d-none d-md-block"></div>
            <div className="kitolto d-none d-md-block"></div>
            <div className="kitolto d-none d-md-block"></div>
            <div className="kitolto"></div>
            <div className="kitolto"></div>

            {/* <div class="container w-25 d-none d-md-block">
                <Slider {...settings}>
                <img src="images/plasma-generator.jpg" className="rounded" alt="plasma-generator" />
                <img src="images/baba.jpg" className="rounded" alt="baba" />
                <img src="images/udvozlunk.jpg" className="rounded" alt="udvozlunk" />
                <img src="images/nls_bacsi.jpg" className="rounded" alt="background" />
                <img src="images/piroca_magide.jpg" className="rounded" alt="background" />
                <img src="images/baba+magdi2.jpg" className="rounded" alt="background" />
                </Slider>
            </div> */}
            <Footer />
        </div>
    );
}

export default Arak;
