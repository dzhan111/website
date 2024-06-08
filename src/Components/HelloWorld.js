import React from "react";

function HelloWorld(props){
    return (
       <h1 className="introduction">Hi I'm {props.name}</h1>
    )
}


export default HelloWorld;