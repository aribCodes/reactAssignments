import { useContext, useState } from "react";
import "./App.css";
import { MainContext } from "./contextProvider/MainContext";
import { NavLink } from "react-router-dom";

function App() {
  const { count, setCount } = useContext(MainContext);
  return (
    <>
      <div>
        <p>Count:{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click me
        </button>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </div>
    </>
  );
}

export default App;
