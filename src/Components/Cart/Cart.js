import React, { useEffect } from "react";
import "./Cart.css";
import { FaRupeeSign } from "react-icons/fa";
import banner from "../../assets/assets/images/banner-02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

import { remove } from "../Store/CartSlice";

const Cart = () => {
  const names = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const REMOVE = (itemId) => {
    dispatch(remove(itemId));
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
      <div className="banner">
        <img src={banner} alt="" />
        <h1 className="overlyy">Your Cart</h1>
      </div>

      <table className="table">
        {names.length === 0 ? (
          <h1 className="text-danger text-center">No Item Cart</h1>
        ) : (
          ""
        )}
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {names.map((item) => {
          const itemPrice = item.price * item.quantity;
          return (
            <React.Fragment key={item.id}>
              <tbody>
                <tr>
                  <td>
                    <img src={item.image01} alt="product1" />
                  </td>
                  <td style={{ fontSize: 25 }}>{item.title}</td>
                  <td style={{ fontSize: 25 }}>
                    <span>
                      <FaRupeeSign />
                      {itemPrice}
                    </span>
                  </td>
                  <td style={{ fontSize: 25 }}>
                    <span style={{ color: "red" }}>{item.quantity}</span>px
                  </td>
                  <td onClick={() => REMOVE(item.id)}>
                    <RiDeleteBin6Line style={{ fontSize: 25 }} />
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          );
        })}
      </table>

      <div className="cartdetail_main">
        <div className="cartdetail">
          <h5>
            Subtotal:₹<span style={{ color: "red" }}>{price}</span>
          </h5>
          <p>Taxes and shipping will calculate at checkout</p>
          <button className="cs">Continue Shopping</button>
          <button className="ptc">Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
