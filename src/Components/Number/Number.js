import React from "react";

const numField = (props) => {
  const style = {

  }
  return (
    <div>
      <h1> Enter a number and create circles! </h1>
      <input type = "text"
      style = {style}
      onChange = {props.change}/>
    </div>
  )
}

export default numField;
