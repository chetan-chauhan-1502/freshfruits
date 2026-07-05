import React from "react";
import "./Fourth.css";
import service1 from "../../../assets/assets/images/service-01.png";
import service2 from "../../../assets/assets/images/service-02.png";
import service3 from "../../../assets/assets/images/service-03.png";

const Fourth = () => {
  return (
    <>
      <div className="fourth">
        <div className="fourth1">
          <img src={service1} alt="" />
          <h1 className="Fname">Quick Delivery</h1>
          <p className="Fdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi
            tenetur dolores! Saepe, cum? Repellendus quam incidunt tenetur
            reiciendis quos consectetur explicabo possimus
          </p>
        </div>
        <div className="fourth1">
          <img src={service2} alt="" />
          <h1 className="Fname">Quick Delivery</h1>
          <p className="Fdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi
            tenetur dolores! Saepe, cum? Repellendus quam incidunt tenetur
            reiciendis quos consectetur explicabo possimus
          </p>
        </div>
        <div className="fourth1">
          <img src={service3} alt="" />
          <h1 className="Fname">Quick Delivery</h1>
          <p className="Fdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi
            tenetur dolores! Saepe, cum? Repellendus quam incidunt tenetur
            reiciendis quos consectetur explicabo possimus
          </p>
        </div>
      </div>
    </>
  );
};

export default Fourth;
