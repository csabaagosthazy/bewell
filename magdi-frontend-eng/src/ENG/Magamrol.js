import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function Magamrol() {
  return (
    <div className="teljes">
      <div className="background">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 p-3 m-auto">
            <div class="p-2">
              <h5>About Me</h5>
              <p>
                Welcome! My name is Magdolna Kozma, and I have been a supporter
                of a healthy lifestyle for decades, both for myself and for my
                loved ones. Since childhood, I have been introduced to the world
                of traditional remedies and the self-healing opportunities
                offered by nature, which I have been practicing ever since.
                This knowledge is deeply rooted in me, intertwining closely
                with my everyday life.
              </p>
              <br />
              <p className="card-text">
                I chose the physical and well-being improving therapies listed
                on my website and immersed myself in them because I am
                passionately interested in health. I want to help others
                understand how to improve their health by combining traditional
                methods with modern technological tools.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded"
              style={{ width: "75%" }}
              src="images/magamrol.jpg"
              alt="magamrol.jpg"
            />
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

      <Footer />
    </div>
  );
}

export default Magamrol;
