import {useState} from "react";

function Hello(){
    const[data,setData]=useState({name:"jubi",course:"fullstack",duration:'6'});
    const changeCourse = () =>{
             setData(previousData =>{
                    return{...previousData,course:'datascience'}
             });
    }
    return(
        <>
            <p>data : {data.course}</p>

            <button onClick={changeCourse}>click</button>
        </>
    )


}

export default Hello;