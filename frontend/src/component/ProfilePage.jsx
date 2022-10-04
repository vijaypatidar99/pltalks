import React,{useEffect,useState,useContext} from "react";
import ImageCard from "./ImageCard";
import Profilecard from "./ProfileCard";
import CreatePost from "./CreatPost";
import ExpModel from "./Exp-Model";
import profile from "./Images/profile.jpg";
import InterviewExperienceCard from "./InterviewExperienceCard";
import { UserContext } from './App';

import { useNavigate } from "react-router-dom";

function ProfilePage(){
    const navigate = useNavigate();
    const [datalist,setdatalist] = useState([]);
    const [data,setdata] = useState({});
    const {state,dispatch} = useContext(UserContext);
    

    const callAccountApi = async()=>{
       try{
         const res = await fetch('/account',{
           method: "GET",
           headers: {
             Accept:"application/json",
             "Content-Type":"application/json"
           },
           credentials: "include"
         });
          const dataa = await res.json();
          setdata(dataa);
          setdatalist(dataa.userPost);
          console.log(dataa.userPost);
         
          if(!res.status===200||res.status===401){
            navigate('/Login');
            const error =new Error(res.error);
            throw error;
            
          }
          dispatch({type:"USER",payload:true});
       }catch(err){
         console.log(err);
         navigate('/Login');
       }
    }

    useEffect(() => {
         callAccountApi();
        
     },[]);
     

    return <>
    <ImageCard img={profile} title="My profile" size="70" align="left" ml="4%"/>
<Profilecard 
name={data.name}
email={data.email}
/>

<CreatePost/>
<ExpModel/>
{datalist && datalist.map((val,index)=>{
    return <InterviewExperienceCard
      key={index} 
      company_name={val.company_name}
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
  })}
    </>
};
export default ProfilePage;