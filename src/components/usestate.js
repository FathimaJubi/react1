import React,{useState} from "react";

function Demo(){
    const[count,setCount]=useState(0);
    return(
        <>
            <p>count{count}</p>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </>
    )


}

export default Demo;