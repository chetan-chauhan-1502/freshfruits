import React, { useState } from "react";
import "./Foods.css";
import banner2 from "../../assets/assets/images/banner-02.jpg";
import FoodData from "./FoodData";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { FaRupeeSign } from "react-icons/fa";

const Foods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = FoodData.filter((food) =>
    food.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const names = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const ADD = (item) => {
    const items = names.find((cartItem) => cartItem.id === item.id);
    if (!items) {
      dispatch(add(item));
    }
  };

  return (
    <>
      <div className="banner2">
        <img src={banner2} alt="" />
        <h1 className="overly">All Foods</h1>
      </div>
      <div className="foods">
        <input
          type="search"
          name=""
          id=""
          placeholder="I'm looking for..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="foodmain">
          {filteredFoods.map((item) => {
            return (
              <div key={item.id} className="card">
                <img src={item.image01} className="card-img-top" alt="..." />
                <p className="card-title">{item.title}</p>
                <div className="Last">
                  <span>
                    <FaRupeeSign />
                    {item.price}
                  </span>
                  <button className="btn" onClick={() => ADD(item)}>
                    ADD to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" type="button" tabIndex="-1">
                Prev
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" type="button">
                1
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" type="button">
                2
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" type="button">
                3
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" type="button">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Foods;
