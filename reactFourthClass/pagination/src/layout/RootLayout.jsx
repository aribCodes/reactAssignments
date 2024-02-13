import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Login from '../components/auth/Login.jsx';

function RootLayout() {
    if (true) {
        
        return ( <Login /> )
    }
    return(
        <>
            {/* <Login /> */}

            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout