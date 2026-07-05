import React from "react";
import "./Sixth.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import location from "../images/location.png";

const Sixth = () => {
  return (
    <>
      <div className="sixth">
        <div className="sixl">
          <img src={location} alt="" />
        </div>
        <div className="sixr">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            reprehenderit veritatis explicabo nihil, illum blanditiis modi nam
            esse sint perferendis consequuntur possimus ipsa quae sit, cumque
            ipsum mollitia laborum accusantium.lorem Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eius eos, quas nisi et ab, sint
            inventore culpa mollitia commodi illo nulla, rerum quidem
            voluptatibus sapiente minus aperiam ad expedita. Fugit.
          </p>
          <h1>
            <span>
              <IoCheckmarkDoneCircleOutline className="done" />
            </span>
            Fresh and testy food{" "}
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            quas nihil aliquam consequatur vel fugiat amet, temporibus nulla
            maxime qui tempore fugit explicabo delectus necessitatibus id
            incidunt repudiandae sunt. Odit?
          </p>
          <h1>
            <span>
              <IoCheckmarkDoneCircleOutline className="done" />
            </span>
            quantity support
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            praesentium incidunt quo labore perferendis repellat earum tenetur
            commodi rerum doloremque, totam non! Nobis voluptate iusto nostrum
            soluta quasi quo repellendus!
          </p>
          <h1>
            <span>
              <IoCheckmarkDoneCircleOutline className="done" />
            </span>
            Order from any location
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nemo facere assumenda nobis, labore rerum tenetur enim nostrum esse
            possimus aliquam quibusdam reprehenderit atque est laborum nisi
            deserunt id eveniet.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sixth;
