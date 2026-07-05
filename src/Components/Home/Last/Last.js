import React from "react";
import "./last.css";
import network from "../images/network.png";
import ava1 from "../images/ava-1.jpg";
import ava2 from "../images/ava-2.jpg";
import ava3 from "../images/ava-3.jpg";
import ava4 from "../images/ava-4.jpg";

const Last = () => {
  return (
    <>
      <div className="lastmain">
        <div className="lastl">
          <div id="carouselExampleIndicators" class="carousel slide ">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active "
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <h5>Testimonial</h5>
                <h1>
                  What our <span style={{ color: "red" }}>customers</span> are
                  saying
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <div className="lastlast">
                  <span>
                    <img src={ava1} alt="" />
                    Avneet Kaur
                  </span>
                </div>
              </div>
              <div class="carousel-item">
                <h5>Testimonial</h5>
                <h1>
                  What our <span style={{ color: "red" }}>customers</span> are
                  saying
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <div className="lastlast">
                  <span>
                    <img src={ava2} alt="" />
                    Avneet Kaur
                  </span>
                </div>
              </div>
              <div class="carousel-item">
                <h5>Testimonial</h5>
                <h1>
                  What our <span style={{ color: "red" }}>customers</span> are
                  saying
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <div className="lastlast">
                  <span>
                    <img src={ava3} alt="" />
                    Avneet Kaur
                  </span>
                </div>
              </div>
              <div class="carousel-item">
                <h5>Testimonial</h5>
                <h1>
                  What our <span style={{ color: "red" }}>customers</span> are
                  saying
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  magnam rem soluta quam voluptate deleniti ipsam accusantium?
                </p>
                <div className="lastlast">
                  <span>
                    <img src={ava4} alt="" />
                    Avneet Kaur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lastr">
          <img src={network} alt="" />
        </div>
      </div>
    </>
  );
};

export default Last;
