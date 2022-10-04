import React from "react";
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import ReactTooltip from "react-tooltip";

function InterviewExperienceCard(props){
    return <>
<div className="container-fluid mt-3 pt-5">
<div class="card border-success mb-3 col-10 offset-1 " >
  <div class="card-header bg-transparent border-success d-flex justify-content-between ">
<h3 className="align-item-center">{props.company_name}</h3>
<div style={{width:"30%",height:"80px"}}>
{/* <img src="https://cdn.freebiesupply.com/logos/large/2x/amazon-dark-logo-png-transparent.png" alt={props.company_name}   style={{objectFit:"fill",width:"100%",height:"100%"}}/> */}
</div>
  </div>
  <div class="card-body text-dark">
  
    <h4 class="card-title">{props.name}</h4> 
    <h6 class="card-title">{props.institute_name}</h6> 
    <p class="card-title">{props.course}</p> 
    <p>Date of Interview : {props.doi}</p>
    <MailTwoToneIcon/>
    
    {props.eligibility!=null ? (
   <div className="container mt-4">
   <strong>Eligibility</strong>
   <p class="card-text">{props.eligibility}</p>
   </div>):""}
   {props.round1!=null ? (
   <div className="container mt-3">
   <strong>Round-1 Exp.</strong>
   <p class="card-text">{props.round1}</p>
   </div>):""}
   {props.round2!=null ? (
   <div className="container mt-3">
   <strong>Round-2 Exp.</strong>
   <p class="card-text">{props.round2}</p>
   </div>):""}
   {props.round3!=null ? (
   <div className="container mt-3">
   <strong>Round-3 Exp.</strong>
   <p class="card-text">{props.round3}</p>
   </div>):""}
   {props.round4!=null ? (
   <div className="container mt-3">
   <strong>Round-4 Exp.</strong>
   <p class="card-text">{props.round4}</p>
   </div>):""}
   {props.round5!=null ? (
   <div className="container mt-3">
   <strong>Round-5 Exp.</strong>
   <p class="card-text">{props.round5}</p>
   </div>):""}
   <div className="container mt-3">

   </div>
  </div>
  <div class="card-footer bg-transparent border-success pb-4">
  <strong>STATUS : </strong>
   <span class="card-text" data-tip data-for="registerTip" style={{color:"blue"}} >{window.location.pathname==="/"? "Verified" : props.status }</span>
   <ReactTooltip id="registerTip" place="top" effect="solid" >
   {window.location.pathname==="/"? "The post is verified by administrator." :( "your post is "+ props.status) }
      </ReactTooltip>
   </div>
</div>
</div>
    </>
}
export default InterviewExperienceCard;