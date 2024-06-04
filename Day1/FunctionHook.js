import React, { useState } from "react";
function FunHook()
{
    const initia=0;
    const[count,setCount]=useState(initia)
    return(
        <div>
             <p>{count}</p>
             
            <button onClick={()=>setCount(count +1)}>increment</button>
            <br></br>
            <button onClick={()=>setCount(count -1)}>Decrement</button>
           
        </div>
    )
}
export default FunHook