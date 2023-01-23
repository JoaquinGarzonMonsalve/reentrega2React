/* eslint-disable no-unused-vars */
import "./estilos/MyButton.css";
import React, {useState} from "react";




function MyButton (props){

    let [colorBtn, setColorBtn] = useState("props.color");
    

    function handleClick(){

    
        setColorBtn ("lightblue");
    }

    return (
    <button 
    onClick={handleClick} 
    style= {{backgroundColor: colorBtn}} 
    className="">

    {'Detalles'}
     </button>
    );
}

export default MyButton;