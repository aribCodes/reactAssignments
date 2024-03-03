import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slices/counter.slice";;

const About = () => {
  const counting = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>About</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{counting}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};

export default About;
