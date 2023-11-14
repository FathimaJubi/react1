import React,{useState,useEffect} from "react";

function Sum(){
    const[count,setCount]=useState(0);
    const[add,addnum]=useState(0)

    useEffect(()=>{
        document.title=`Count:${count}`;
    },[count])
    return(
        <>
            <p>count{count}</p>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <p>add{add}</p>
            <button onClick={()=>addnum(add+2)}>add</button>
        </>
    )


}

export default Sum;