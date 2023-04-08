import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../img/logoSlogan.png";
const Navbar = () => {
  return (
    <>
      <div
        className="navbar"
        style={{
          display: "grid",
          padding: ".5rem",
          height:"80px!important",
          maxWidth:"1250px",
  
          margin:"auto",
          gridTemplateColumns: "1fr 1fr 2fr 1fr",
          alignItems: "center",
          background: "white",
          justifyContent: "center",
        }}
      >
    
        <div className="logo">
          <img
            src={logo}
            style={{
              height: "6rem",
              marginLeft: "1vw",
            }}
          />
        </div><div>

        </div>
        <div>
          <Link to="/" style={navfont}>
            Home
          </Link>
          <Link to="/billing" style={navfont}>
            Order Now
          </Link>
          <Link to="/" style={{ fontSize: "20px", margin: "0 1rem" }}>
            Home
          </Link>
          <Link to="/billing" style={{ fontSize: "20px", margin: "0 1rem" }}>
            Order Now
          </Link>
        </div>

        <div>
          <Link to="/billing">Order Now</Link>
          <Link to="/">Home</Link>
          <Link to="/billing">Order Now</Link>
          <Link to="/"></Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Navbar;

const navfont = {
  fontSize: "20px",
  margin: "0 1rem",
  textDecoration: "none",
  color: "black",
};
