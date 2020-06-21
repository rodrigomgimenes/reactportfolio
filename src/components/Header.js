import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./pages/supplementary/Navbar";
import navList from "./pages/supplementary/navList.json";


class Header extends Component {
  state = {
    navList
  };

  render() {
    return (
      <div className="navbar navbar-inverse navbar-static-top">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            
            <Link className="navbar-brand" to="/">Rodrigo M. Gimenes</Link>
          </div> 
        
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              {/* ROUTE to every nav link */}
              {this.state.navList.map(navbar => (
                <Navbar id={navbar.id} headtitle={navbar.headtitle} href={navbar.href} />
              ))}
            </ul> 
          </div> 

        </div>
      </div> 
    );
  }
}

export default Header;