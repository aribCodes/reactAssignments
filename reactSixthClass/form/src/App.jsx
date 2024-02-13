import { useState } from 'react'
import './App.css'
import Login from "./components/Login.jsx";
import Home from './components/Home.jsx'
import { Outlet } from 'react-router-dom';

function App() {

  <Outlet />
  if (!sessionStorage.getItem("user")) {
    return <Login />
  }
  else{
    return <Home />
  }

  return(
    <>
      <Outlet />
      {/* <Home /> */}
    </>
  )
}

export default App
