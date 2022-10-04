import React  from "react";
import Form from "./FormCard";
import "./Exp_Model.css";
function Exp_Model(){
    return <>
   
       <div className=" modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-scrollable modal-lg ">
    <div className="modal-content ">
      <div className="modal-header">
        <h5 className="modal-title text-capitalize" id="staticBackdropLabel">Interview Experience</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  ">
     <Form   />
      </div>

    </div>
  </div>
</div>
    </>
};

export default Exp_Model;