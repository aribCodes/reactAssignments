import React from 'react'
import List from './list/List.jsx';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import Login from './auth/Login.jsx';


const Header = ({heading}) => {


  return (
    <>
        <h1>{heading}</h1>
        <nav>
            <List>
                <li>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) =>
                        {
                            if (isActive) {
                                return "active"
                            }
                        } }
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/about'}
                        className={({ isActive }) =>
                        {
                            if (isActive) {
                                return "active"
                            }
                        } }
                    >About</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/contacts'}
                        className={({ isActive }) =>
                        {
                            if (isActive) {
                                return "active"
                            }
                        } }
                    >Contact Us</NavLink>
                </li>
            </List>
        </nav>
    </>
  )
}

export default Header