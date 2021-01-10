import React, { Component } from "react";
import classes from "./Sidebar.css";

const sideBar = ( props ) => {



  const getClassName = ( props ) => {
    if (this.state.isBoxVisible ){
      return classes.sidebar;
    } else {
      return null;
    }
  }


  return(
    <div>
      <div className = { `classes ${props.status ? "sidebar" : "hidden"} `}>
        <nav>
        <button className = "close" onClick = {props.onClick}>.</button>
        <button >  About </button>
        <button > Contact Us </button>
        <button> Support </button>

        <button> Our Clients </button>
        <button> Find a circle near you </button>
        <button> Testimonials </button>
        </nav>
      </div>
    </div>
  )}

export default sideBar
