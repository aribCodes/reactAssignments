import { useEffect, useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Navbar from "./pages/Navbar";
import WithLoading from "./hoc/WithLoading";
import useIsMobile from "./hooks/useIsMobile";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/slices/counter.slice";

const Button = ({ handleFunction, value }) => {
  return <button onClick={() => handleFunction()}>{value}</button>;
};

const ButtonWithLoading = WithLoading(Button);

function App() {
  const counting = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // hook calling ////////////////////
  const { isMobile } = useIsMobile();
  console.log(isMobile);

  ////////////////////////////////////

  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    console.log("clicked");
  }
  function handleHoc() {
    console.log("clicked Hoc");
  }

  const handleBtnClick = () => {
    setIsLoading((prev) => !prev);
  };

  return (
    <>
      <Navbar isMobile={isMobile} />
      <div>Custom Hooks and Higher Order Components</div>
      <NavLink 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        to="/about"
      >
        About
      </NavLink>
      <ButtonWithLoading
        isLoading={isLoading}
        handleFunction={handleBtnClick}
        value={"Click me HOC"}
      />
      <ButtonWithLoading
        isLoading={false}
        handleFunction={handleHoc}
        value={"Click"}
      />

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{counting}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}

export default App;
