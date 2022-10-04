import React from "react";
import "./ProfileCard.css"
import profileimg from "./Images/profilecard.png";

function Profilecard(props){
   // console.log(props.name);
return <>
<div className="container  bg-light cont ">

<div className="upper-img-div col-lg-6 offset-lg-3  col-sm-8 offset-sm-2 col-xs-4 offset-xs-4 ">
     <div className="img-div">
         <img  className="p-img rounded-circle " src={profileimg} alt="abc" />
    
     </div>
     <h6 className="text-center mt-2">{props.name}</h6>
     <p className="text-center mt-2">{props.email}</p>

</div>

</div>
</>
};
export default Profilecard;