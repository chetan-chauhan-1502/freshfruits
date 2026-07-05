import React from "react";
import CardData1 from "./CardData1.js";
import "./Card1.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Store/CartSlice.js";
import { FaRupeeSign } from "react-icons/fa";

const Card = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let ADD = (item) => {
    let items = names.find((cartItem) => cartItem.id === item.id);
    if (!items) {
      dispatch(add(item));
    }
  };
  return (
    <>
      <div className="main1">
        {CardData1.map((item) => {
          return (
            <div class="card">
              <img src={item.image01} class="card-img-top" alt="..." />
              <p class="card-title">{item.title}</p>
              <div className="Last">
                <span>
                  <FaRupeeSign />
                  {item.price}
                </span>
                <button class="btn" onClick={() => ADD(item)}>
                  ADD to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
