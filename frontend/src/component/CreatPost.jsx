import React from "react";

function CreatePost(){
    return <>
        <div className="container d-flex justify-content-center align-item-*-center mt-2 " >
             <h6>Share interview experience </h6>
             
             <button type="button" className="btn btn-primary " style={{ marginLeft:"15px",height:"30px",display:'flex',alignItems:"center"} }data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Create Post
</button> 
        </div>
    </>
};
export default CreatePost;