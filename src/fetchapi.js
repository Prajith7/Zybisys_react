import React, { useState,useEffect } from 'react'

const  Mybutton=()=>{
  const [count,setCount]=useState(0);


 useEffect(()=>{

  alert("change");
 },[count])
  function incrementClick(){
    setCount(count+1)
  }
  function decrementOp(){
    setCount(count-1)
  }

  return(
    <>
     <button onClick={incrementClick}>click to add</button>
     <button onClick={decrementOp}>click to sub</button>
    <p>{count}</p>
    </>
   
  );
}

export default Mybutton