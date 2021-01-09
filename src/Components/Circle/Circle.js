import React from "react";
import "./Circle.css"

const Circle = (props) => {


  let arr = []
  for(let i = 0 ; i < props.num; i++){
    arr.push(i)}

  console.log(props.num);
  console.log(arr);

  const totalCircles = arr.map(num => <span key = {Math.random() * 10}/>)

  return (
    <div>
      <p> It's circle time </p>
      <div className = "circleDiv">
      {totalCircles}
      </div>
    </div>
  )
}
/*
const handleCircleChange = ( inputNum ) => {
  //1. take in props.num
  console.log("test");


  }
  //2. review map logic
*/



export default Circle
