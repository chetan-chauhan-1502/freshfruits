import React, { useState } from "react";
import CardData from "./CardData.js";
import "./Card.css";
  import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Burger from "../../../assets/assets/images/hamburger.png";
import Pizza from "../../../assets/assets/images/pizza.png";
import Snacks from "../../../assets/assets/images/bread.png";
import Drinks from "../../../assets/assets/images/foodCategoryImg04.png";
import {add} from "../../Store/CartSlice.js";

const Card = () => {
  let [list, setList] = useState(CardData);

  let FUNN = (names) => {
    let update = CardData.filter((rmv) => {
      return rmv.category === names;
    });
    setList(update);
  };

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
      <div className="fifth">
        <ul>
          <li onClick={() => setList(CardData)}>
            <button>All</button>
          </li>
          <li onClick={() => FUNN("Burger")}>
            <button>
              <span>
                <img src={Burger} alt="" />
              </span>
              Burger
            </button>
          </li>
          <li onClick={() => FUNN("Pizza")}>
            <button>
              <span>
                <img src={Pizza} alt="" />
              </span>
              Pizza
            </button>
          </li>
          <li onClick={() => FUNN("Snacks")}>
            <button>
              <span>
                <img src={Snacks} alt="" />
              </span>
              Snacks
            </button>
          </li>
          <li onClick={() => FUNN("Drinks")}>
            <button>
              <span>
                <img src={Drinks} alt="" />
              </span>
              Drinks
            </button>
          </li>
        </ul>
      </div>

      <div className="main">
        {list.map((item) => {
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
