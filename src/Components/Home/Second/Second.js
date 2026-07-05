import React from "react";
import "./Second.css";
import category1 from "../../../assets/assets/images/category-01.png";
import category2 from "../../../assets/assets/images/category-02.png";
import category3 from "../../../assets/assets/images/category-03.png";
import category4 from "../../../assets/assets/images/category-04.png";

const Second = () => {
  return (
    <>
      <div className="secondmain">
        <div className="se1">
          <div className="se11">
            <img src={category1} alt="" />
            <div className="name">FastFood</div>
          </div>
        </div>
        <div className="se1">
          <div className="se11">
            <img src={category2} alt="" />
            <div className="name">FastFood</div>
          </div>
        </div>
        <div className="se1">
          <div className="se11">
            <img src={category3} alt="" />
            <div className="name">FastFood</div>
          </div>
        </div>
        <div className="se1">
          <div className="se11">
            <img src={category4} alt="" />
            <div className="name">FastFood</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
