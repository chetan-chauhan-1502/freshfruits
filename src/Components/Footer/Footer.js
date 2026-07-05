import React from "react";
import "./Footer.css";
import { TbLocationSearch } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <div className="footer_beta">
          <div className="footer_b">
            <div className="logo">
              <img src={logo} alt="" />
              <h1 className="logoname">Fresh Bites</h1>
            </div>
            <p>Lorem ipsum dolor sit, amet consecteturassumenda distinctio</p>
          </div>
          <div className="footer_b">
            <h1>Delivery Time</h1>
            <h3>Monday-Friday</h3>
            <p>10:00am - 11:00pm</p>
            <h3>Saturday-Sunday</h3>
            <p>Full Day</p>
          </div>
          <div className="footer_b">
            <h1>Contact</h1>
            <h3>Location: Sola Ahmedabad</h3>
            <h3>Phone: 9913041204</h3>
            <h3>Email: chauhanc1204@gmail.com</h3>
          </div>
          <div className="footer_b">
            <h1>Newsletter</h1>
            <p>Subscribe Our newsletter</p>
            <div className="searchfor">
              <input type="text" placeholder="Enter your email" />
              <TbLocationSearch className="search_btn ms-2 me-2 " />
            </div>
          </div>
        </div>
        <p className="mt-2 " style={{ color: "red" }}>
          Copyright-2024 , website made by Chetan chauhan All rights reversed
        </p>
        <div className="social_media">
          <span className="follow">
            Follow:
            <FaFacebook className="sociallink" />
            <FaGithub className="sociallink" />
            <FaYoutube className="sociallink" />
            <FaLinkedinIn className="sociallink" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
