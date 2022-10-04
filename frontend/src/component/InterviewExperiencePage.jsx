import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import interviewImg from "./Images/interview.jpg";
import InterviewExperienceCard from "./InterviewExperienceCard";
import { useNavigate } from 'react-router-dom';


function InterviewExperiencePage() {
  const [datalist, setdatalist] = useState([]);
  const [start,setstart]=useState(0);
  const [filter, setFilter] = useState({});
  let navigate=useNavigate();
 
 
  function onchange(e) {
    const val = e.target.value;
    setFilter({ ...filter, val });
  }

  useEffect(() => {
    onvisit();
    
  }, []);


  async function onvisit() {
    //console.log(filter);

    try{
      const res = await fetch('/experiance',{
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials: "include"
      });
       const data = await res.json();
       
       setdatalist(data);
       //console.log(data);
      if(data.length===0)
      alert("no data found");
       if(!res.status===200||res.status===401){
         //navigate('/Login');
         const error =new Error(res.error);
         throw error;
         
       }
    }catch(err){
      //console.log(err);
     // navigate('/Login');
    }
 
  }
  console.log(filter.val);
  
  async function onclick() {
    console.log(filter.length);

    try{
      const res = await fetch('/experiance/'+filter.val,{
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials: "include"
      });
       const data = await res.json();
       
       setdatalist(data);
       setstart(0);
       //console.log(data);
      if(data.length===0){
        
      alert("No post related to "+filter.val+" found.");
      onvisit();
    }
       if(!res.status===200||res.status===401){
         //navigate('/Login');
         const error =new Error(res.error);
         throw error;
         
       }
    }catch(err){
      //console.log(err);
     // navigate('/Login');
    }
 



    // api
    //   .get("/post/", { params: { company_name: filter.val } })
    //   .then((res) => {
    //     setdatalist(res.data);
        
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  
  }
console.log(start);
function next(){
  setstart(start+3);}
  function previous(){
    setstart(start-3);}
  return (
    <>
     <div className="containor-fluid ">
       <ImageCard img={interviewImg} title="" size="56px" />

       <div
          className="container-fliud mt-4 mb-4 d-flex"
          style={{ justifyContent: "center" }}
        >
          <input
            type="text"
            name="company"
            onChange={onchange}
            className="form-control "
            id="exampleFormControlInput1"
            placeholder=" Filter by Company"
            style={{ width: "50%", height: "30px" }}
          />
          <button
            type="button"
            className="btn  btn-light"
            onClick={onclick}
            style={{
              height: "30px",
              marginLeft: "10px",
              display: "inline-flex",
              alignItems: "center",
              backgroundColor:"#9f7ac4"
            }}
          >
            Filter
          </button>
        </div>
       





    


        {datalist &&
          datalist.slice(start,Math.min(start+4,datalist.length)).map((val, index) => {
            return (
              <InterviewExperienceCard
                key={index}
                company_name={val.company_name}
                institute_name={val.instituteName}
                doi={val.date_of_interview}
                name={val.name}
                course={val.course}
                eligibility={val.eligibility}
                round1={val.round1}
                round2={val.round2}
                round3={val.round3}
                round4={val.round4}
                round5={val.round5}
                status={val.status}
              />
            );
          })}

          <div>

<div className="footer" style={{display:"flex",justifyContent:"center",marginTop:"10px",marginBottom:"20px"}}>
{ start > 2 &&
  <button
  type="button"
  className="btn btn-primary "
  onClick={previous}
  style={{
    height: "30px",
    marginLeft: "10px",
    display: "inline-flex",
    alignItems: "center",
  }}
>
PREVIOUS
</button>

}

{   start<datalist.length-4 &&
          <button
            type="button"
            className="btn btn-primary "
            onClick={next}
            style={{
              height: "30px",
              marginLeft: "10px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
          NEXT
          
          </button>}
        
          </div>
          </div>
      </div>
    </>
  );
  

}

export default InterviewExperiencePage;
