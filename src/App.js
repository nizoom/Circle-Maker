import React, { Component } from "react"
import './App.css';
import Circle from "./Components/Circle/Circle"
import NumField from "./Components/Number/Number"
import Sidebar from "./Components/Sidebar/Sidebar"


class App extends Component{
  state = {
    num : 0,
    valid : true,
    isBoxVisible : false
  }
  numInputHandler = (event) => {
    let input = event.target.value;
    if(isNaN(Number(input))){
      console.log("Not Valid");
      this.setState( { valid : false } )

    } else {
      this.setState( { num : input, valid : true } )
    }

  }

  clickHandler = ( ) => {
    this.setState(prevstate => ({
      isBoxVisible : !prevstate.isBoxVisible }))
    console.log(this.state.isBoxVisible);
  }

  render(){

    const { isBoxVisible } = this.state;

    return (
      <div className= { `classes ${this.state.isBoxVisible ? "push" : "App"}`}>
        <NumField change = {this.numInputHandler}/>
        <Circle
        num = {this.state.num}/>

        <div> {
          this.state.valid ? null :
          <h2> The input is invalid. Please enter a number </h2>
        } </div>
        <button onClick = {this.clickHandler} className = "menu"
        > Menu </button>

        <Sidebar
        status = {this.state.isBoxVisible}
        onClick = {this.clickHandler}/>

      </div>
    );

  }

}

export default App;
