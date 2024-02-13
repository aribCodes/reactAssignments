import React, { useContext } from "react";
import { MainContext } from "./contextProvider/MainContext";
import { NavLink } from "react-router-dom";

const About = () => {
  const { count } = useContext(MainContext);
  return (
    <>
      <p>Count:{count}</p>
      <div>About</div>
      <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
    </>
  );
};

export default About;
