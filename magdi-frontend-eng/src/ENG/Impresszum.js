import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Impresszum() {
  return (
    <div className="teljes">
      <div className="background-magamrol">
        <div className="row">
          <div className="col-md-7 col-lg-7 col-xl-7 p-3 m-auto">
            <div class="w-100 card border-0 shadow p-2 m-auto">
              <h5>Imprint and Legal Disclaimer</h5>
              <p>I'm glad you visited. Please note the following.</p>

              <ul>
                <li>
                  The responsible operator of{" "}
                  <span
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    <Link to="/" style={{ color: "black" }}>
                      https://legyjolkozpont.hu
                    </Link>
                  </span>{" "}
                  is Magdolna Kozma, Balatonalmádi 8200.
                </li>
                <li>
                  The content of{" "}
                  <span
                    style={{
                      color: "black",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                  >
                    <Link to="/" style={{ color: "black" }}>
                      https://legyjolkozpont.hu
                    </Link>
                  </span>{" "}
                  is purely private information. It is not a "press or media
                  service provider
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h3 className="text-center">Copyright © </h3>
                <p className="card-text">
                  Magdolna Kozma, Balatonalmádi (Hungary). All rights reserved.
                  All text and images on the website are self-made. The text,
                  images, diagrams, and the arrangement of all of these on
                  https://legyjolkozpont.hu are protected by copyright and other
                  laws.
                </p>
                <br />
                <h3 className="text-center">Disclaimer of Liability</h3>
                <p className="card-text">
                  The operator has compiled the contents of the website with the
                  greatest possible care. Nevertheless, the operator cannot
                  guarantee the complete accuracy and correctness of the
                  published data. The operator hereby excludes all liability for
                  damages that may arise directly or indirectly from the use of
                  these pages.
                </p>
                <br />
                <h3 className="text-center">External Links</h3>
                <p className="card-text">
                  If there are links on this website referring to other websites
                  provided by third parties, the operator of this website cannot
                  accept any responsibility for their content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
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

export default Impresszum;
