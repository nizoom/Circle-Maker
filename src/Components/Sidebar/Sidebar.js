import React, { Component } from "react";
import classes from "./Sidebar.css";

class sideBar extends Component {

  state = {
    isBoxVisible : false
    }


  clickHandler = ( ) => {
    this.setState(prevstate => ({
      isBoxVisible : !prevstate.isBoxVisible }))
    console.log(this.state.isBoxVisible);
  }

  getClassName = ( ) => {
    if (this.state.isBoxVisible ){
      return classes.sidebar;
    } else {
      return null;
    }
  }

  closeHandler = (  ) => {
      this.setState({
        isBoxVisible : false
      })
  }
  render (){
    const { isBoxVisible } = this.state;
  return(
    <div>
      <button onClick = {this.clickHandler} className = "menu"
      > Menu </button>
      <div className = { `classes ${isBoxVisible ? "sidebar" : "hidden"} `}>
        <nav>
        <button className = "close" onClick = {this.closeHandler}> - </button>
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
}

export default sideBar
