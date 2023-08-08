
import { useState } from 'react';
import './App.css';
const bg_color=['red','blue','yellow','black'];
export const Toggle = () => {
    const[isActive,setActive]=useState("");
    function colorChange(item){
        setActive(item)
    }
    return(
        <div>
            {bg_color.map((item)=>{
                return(
                    <button  onClick={()=>colorChange(item)}>{item}</button>
                )
         })}
         <div  className="toggleDiv"style={{background:isActive}}></div>
        </div>

    )

    


}
