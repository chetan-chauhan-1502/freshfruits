import React from "react";
import "./Ads.css";
import { FaCar } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import hero from '../../../assets/assets/images/hero.png'

const Ads = () => {
  return (
    <>
      <div className="adsmain">
        <div className="left">
          <h4>Easy way to make order</h4>
          <h1>
            <span style={{ color: "red", fontWeight: 700 }}>Hungry?</span>
            Just wait food at{" "}
            <span style={{ color: "red", fontWeight: 700 }}>your door</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, amet
            consectetur adipisicing elit. Quae, amet consectetur adipisicing
            elit. Quae, quod!
          </p>
          <div className="btns">
            <button className="bl">Order Now</button>
            <button className="br">See All Foods</button>
          </div>
          <div className="llast">
            <p className="pl">
              <span>
                <FaCar className="noshiping" />
              </span>
              no shiping charge
            </p>
            <p className="pr">
              <span>
                <MdOutlineSecurity className="security" />
              </span>
              100% secure checkout
            </p>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Ads;
