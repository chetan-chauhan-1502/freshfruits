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
  const names = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Foods", label: "Foods" },
    { to: "/Cart", label: "Cart" },
    { to: "/Contact", label: "Contact" },
  ];

  const REMOVE = (itemId) => {
    dispatch(remove(itemId));
  };

  const INCR = (itemId) => {
    dispatch(increment(itemId));
  };

  const DECR = (itemId) => {
    dispatch(decrement(itemId));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names));
  }, [names]);

  const price = names.reduce(
    (def, item) => def + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="navbar ">
        <Link to="/">
          <div className="logomain">
            <img src={Logo} alt="" />
            <h1 className="mainlogoname">Fresh Fruits</h1>
          </div>
        </Link>

        <div className="nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
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
            <span className="icon-button__badge">{names.length}</span>
          </div>
          <div className="icon">
            <CiUser className="user" />
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Items</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="carddata_main">
            {names.length === 0 ? <h1>No Item Cart</h1> : ""}
            {names.map((item) => {
              const itemPrice = item.price * item.quantity;
              return (
                <div className="cardd" key={item.id}>
                  <div className="oneee">
                    <img
                      src={item.image01}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p>{item.title}</p>
                  </div>
                  <div className="twooo">
                    <span style={{ fontSize: 25 }}>1x</span>
                    <p>₹{itemPrice}</p>
                    <button className="btnn" onClick={() => REMOVE(item.id)}>
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
