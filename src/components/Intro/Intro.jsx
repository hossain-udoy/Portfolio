import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import Resume from "../Services/resume.pdf";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Md Awalad Hossain Udoy</span>

          <span>
            MERN Stack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}></Link> */}
        <a href={Resume} download>
          <button className="button i-button">Download My Resume</button>
        </a>
        {/* social icons */}
        <div className="i-icons text-7xl text-amber-400">
          <a
            href="https://github.com/hossain-udoy"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub></BsGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/md-awalad-hossain-udoy/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin></BsLinkedin>
          </a>
          <a
            href="https://www.facebook.com/hossain.udoy/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook></BsFacebook>
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img className="to" src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        ></motion.div>
        <FloatinDiv img={crown} text1="Web" text2="Developer" />

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        ></motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
