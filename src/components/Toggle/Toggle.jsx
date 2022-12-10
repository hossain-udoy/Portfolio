import React, { useContext } from "react";
import "./Toggle.css";
import { themeContext } from "../../Context";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <BsSun></BsSun>
      <BsMoon></BsMoon>
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={darkMode ? { left: "5px" } : { right: "5px" }}
      ></div>
    </div>
  );
};

export default Toggle;
