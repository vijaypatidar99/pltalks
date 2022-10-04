import React from "react";

function PopupCard(props){
    return  <>
        <h3 className="align-item-center col-5">{props.company_name}</h3>
        <div style={{width:"30%",height:"80px"}}>
              <img src="https://cdn.freebiesupply.com/logos/large/2x/amazon-dark-logo-png-transparent.png" alt={props.company_name}   style={{objectFit:"fill",width:"100%",height:"100%"}}/>
        </div>
  
        
             <h5 class="card-title">{props.name}</h5> 
             <h6 class="card-title">{props.course}</h6> 
          
 
        <div className=" mt-4">
         <strong>Eligibility</strong>
         <p class="card-text">{props.eligibility}</p>
   </div>
   <div className=" mt-3">
         <strong>Round-1 Exp.</strong>
         <p class="card-text">{props.round1}</p>
   </div>
   <div className=" mt-3">
   <strong>Round-2 Exp.</strong>
   <p class="card-text">{props.round2}</p>
   </div>
   <div className=" mt-3">
   <strong>Round-3 Exp.</strong>
   <p class="card-text">{props.round3}</p>
   </div>
   <div className=" mt-3">
   <strong>Round-4 Exp.</strong>
   <p class="card-text">{props.round4}</p>
   </div>
   <div className=" mt-3">
   <strong>Round-5 Exp.</strong>
   <p class="card-text">{props.round5}</p>
   </div>
   <div className=" mt-3">

   </div>
  
   <div class="card-footer bg-transparent border-success pb-4">
  <strong>STATUS : </strong>
   <span class="card-text"  style={{color:"blue"}} >{props.status}</span></div>
    </>
}

export default PopupCard;