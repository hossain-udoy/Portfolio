import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="email1">udoyh305@gmail.com</span>
        <div className="flex gap-3">
          <a
            href="https://github.com/hossain-udoy"
            className="text-5xl"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub></BsGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/md-awalad-hossain-udoy/"
            className="text-5xl"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin></BsLinkedin>
          </a>
          <a
            href="https://www.facebook.com/hossain.udoy/"
            className="text-5xl"
            rel="noreferrer"
            target="_blank"
          >
            <BsFacebook></BsFacebook>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
