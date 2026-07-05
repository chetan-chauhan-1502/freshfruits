import React, { useEffect } from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import Logo from "../../assets/assets/images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove, increment, decrement } from "../Store/CartSlice";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemId) => {
    dispatch(remove(itemId));
  };

  let INCR = (itemId) => {
    dispatch(increment(itemId));
  };

  let DECR = (itemId) => {
    dispatch(decrement(itemId));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names));
  }, []);

  let price = names.reduce((def, item) => def + item.price * item.quantity, 0);
  return (
    <>
      <div className="navbar ">
        <Link to={"/"}>
          <div className="logomain">
            <img src={Logo} alt="" />
            <h1 className="mainlogoname">Fresh Fruits</h1>
          </div>
        </Link>

        <div className="nav">
          <ul>
            <Link to={"/"}>
              <li>
                <a href="#">Home</a>
              </li>
            </Link>
            <Link to={"/Foods"}>
              <li>
                <a href="#">Foods</a>
              </li>
            </Link>
            <Link to={"/Cart"}>
              <li>
                <a href="#">Cart</a>
              </li>
            </Link>
            <Link to={"/Contact"}>
              <li>
                <a href="#">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="icons">
          <div className="icon" style={{ marginRight: "15px" }}>
            <span>
              <FaShoppingCart
                className="cart "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              />
            </span>
            <span class="icon-button__badge">{names.length}</span>
          </div>
          <div className="icon">
            <CiUser className="user" />
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        // style={{ width: "40%" }}
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasTopLabel">Items</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="carddata_main">
            {/* cart item o hoy to aa message dekhade  */}
            {names.length === 0 ? <h1>No Item Cart</h1> : ""}
            {names.map((item) => {
              let price = item.price * item.quantity;
              return (
                <div class="cardd ">
                  <div className="oneee">
                    <img
                      src={item.image01}
                      class="card-img-top "
                      alt="..."
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p>{item.title}</p>
                  </div>
                  <div className="twooo">
                    <span style={{ fontSize: 25 }}>1x</span>
                    <p>₹{price}</p>
                    <button class="btnn" onClick={() => REMOVE(item.id)}>
                      <IoCloseSharp style={{ fontSize: 25 }} />
                    </button>
                  </div>

                  <div className="Lasttt">
                    <span>
                      <button
                        onClick={() => DECR(item.id)}
                        style={{ borderRadius: "10px 0 0 10px" }}
                      >
                        -
                      </button>
                      <span className="priceee">{item.quantity}</span>
                      <button
                        onClick={() => INCR(item.id)}
                        style={{ borderRadius: "0 10px  10px 0" }}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="subtotal">
            <span>
              Subtotal : <span>₹{price}</span>
            </span>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
