import React from "react";
import "./imageCard.css";
function ImageCard(props){
    
    return <>
<div style={{height:"600px",width:"100%",position:"relative",textAlign:"center"}}>
        <img  src={props.img} style={{objectFit:"fill" , width:"100%" ,height:"100%"}} alt="abc"/>
         <h1 className="imageCardDiv"  style={{position:"absolute",top:"40%",bottom:"45%",color:"black",fontSize:props.size,width:"70vw",fontFamily: "'Monoton', cursive",textAlign:props.align,marginLeft:props.ml}}>{props.title}</h1>
    </div>
    </>
}
export default ImageCard;
