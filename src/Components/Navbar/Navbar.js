import React, { Component } from "react";
import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/drawertogglebutton";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";
    return (
      <div className="navbar">
        <nav className="navbarnavigation">
          <div className="toolbartoggle">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <img
            src={imagePath + "/Digitalmachine.png"}
            alt="Digital Machine"
            className="logo"
          ></img>
          <div className="break"></div>
          <div className="navbaritems">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <div className="navbarline"></div>
              <li>
                <Link to={"/aboutus"}>About</Link>
              </li>
              <div className="navbarline"></div>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <div className="navbarline"></div>
              <li>
                <Link to={"/photos"}>Photos</Link>
              </li>
              <div className="navbarline"></div>
              <li>
                <Link to={"/contactus"}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
