import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"

const MainNavbar = () => {
  const [changeOne , setChangeOne] = useState("navLinkUnderline");
  const [changeTwo , setChangeTwo] = useState("noUnderLine");
  function underlineOne() {
    setChangeOne("navLinkUnderline");
    setChangeTwo("noUnderLine");
  }
  function underlineTwo() {
    setChangeOne("noUnderLine");
    setChangeTwo("navLinkUnderline");
  }
  return (
    <>
      <Navbar expand="lg" id="navbar" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="navBrand" href="#home">MUHAMMAD ARIB FAISAL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navLink" id={changeOne} onClick={() => underlineOne()} href="#home">ABOUT</Nav.Link>
              <Nav.Link className="navLink" id={changeTwo} onClick={() => underlineTwo()} href="#link">WORK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="navText">
                LET'S CONNECT <Button>aribfaisal2002@gmail.com</Button>
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
