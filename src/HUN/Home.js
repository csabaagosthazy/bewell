import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

function Home() {
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
      <div>
        <div className="container border mt-2">
          <div className="row egyedi">
            <div className="col-md-6 col-lg-6 col-xl-6 text-center">
              <img
                className="m-3 rounded border"
                src="/images/sample.jpeg"
                alt=""
              />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 p-3">
              <h5>Magamról</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                quam voluptates labore impedit, deserunt iste! Aspernatur earum
                dolore quis exercitationem, facere, officiis odio assumenda nemo
                reiciendis vero eaque rem quidem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-100 mt-4 p-3">
          <div className="row row-cols-1 row-cols-md-3 text-center">
            <div className="col border p-3">
              <br />
              <h5 className="text-center">NLS diagnosztika</h5>
              <p className="m-2 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus id modi quia accusamus recusandae, sit numquam aliquid
                praesentium ex veritatis deserunt quis voluptas repellendus unde
                error commodi similique rem voluptatibus!
              </p>

              <button className="text-center btn btn-primary m-3">
                <a href="#">Bővebben</a>
              </button>
              <br />
              <img src="images/sample.jpeg" className="rounded" alt="" />
            </div>
            <div className="col border p-3">
              <br />
              <h5>Pióca terápia</h5>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                sit quae distinctio quibusdam, quisquam molestiae iusto numquam
                quia eveniet, autem, animi ipsum nesciunt velit eaque recusandae
                sequi amet. Quis, veritatis?
              </p>
              <button className="text-center btn btn-primary m-3">
                <a href="#">Bővebben</a>
              </button>
              <br />
              <img src="images/sample.jpeg" className="rounded" alt="" />
            </div>
            <div className="col border p-3">
              <br />
              <h5 className="text-center">Safe laser</h5>
              <p className="m-2 text-end">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                sit quae distinctio quibusdam, quisquam molestiae iusto numquam
                quia eveniet, autem, animi ipsum nesciunt velit eaque recusandae
                sequi amet. Quis, veritatis?
              </p>
              <button className="text-center btn btn-primary m-3">
                <a href="#">Bővebben</a>
              </button>
              <br />
              <img src="images/sample.jpeg" className="rounded" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-75 m-auto mt-4">
        <div className="row">
          <div className="col-md-5">
            <div className="slider m-auto">
              <Slider {...settings}>
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
              </Slider>
              <br />
            </div>
          </div>
          <div className="col-md-7">
            <h3 className="text-center">Frekvencia terápia</h3>

            <div className="row">
              <div className="col">
                <p className="text-start">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores expedita, ex dolor animi delectus quisquam aliquam
                  quam nobis necessitatibus, iure repellat alias quaerat
                  dignissimos porro non. Asperiores officiis quidem
                  exercitationem!
                </p>
              </div>
              <div className="col">
                <p className="text-start">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores expedita, ex dolor animi delectus quisquam aliquam
                  quam nobis necessitatibus, iure repellat alias quaerat
                  dignissimos porro non. Asperiores officiis quidem
                  exercitationem!
                </p>
              </div>
            </div>
            <div className="row">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                rerum, aperiam est quam in error impedit nemo, ratione, magnam
                voluptate qui. Fugit cum magnam sint quos officia sapiente
                commodi cupiditate.
              </p>
              <button className="text-center btn btn-primary m-auto">
                <a href="#">Bővebben</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-dark text-light py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h5>Magamról</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col-6">
              <h5>Contact</h5>
              <address>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@example.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
