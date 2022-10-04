
import React,{useState} from 'react'
import "./Login.css"

import ImageCard from "./ImageCard";
import login from "./Images/login.jpg";
import validator from 'validator'
import Swal from 'sweetalert2';

import { useNavigate } from "react-router-dom";
import { ThreeCircles } from  'react-loader-spinner'

export default function Login() {
  const navigate = useNavigate();
  const [data,setdata]=useState([]);
  const [spinner, setSpinner] = useState(false);
  
 function handle(e){
     e.preventDefault();
   const name = e.target.name;
    const value = e.target.value;
    setdata({...data,[name]:value});
 }

async function validation(e){
    
    e.preventDefault();
    const email=data.email;
    const pass1=data.password;
    const pass2=data.confirmPassword;
    if(email===undefined||pass1===undefined||pass2===undefined){
      Swal.fire({
       
        title:"Email or Password field are empty",
        text:'email and password fields are mandatory',
        icon:'info',
        confirmButtonText:'Cancel'

       })
    }
   else
    if (validator.isEmail(email)) {

      if (validator.isStrongPassword(pass1, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })){
        if(pass2===pass1){
          setSpinner(true);
          const res = await fetch('/registration',{
        method:"POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(data)
          })
      const resData=res.json();
     // console.log(res.status);
      if(res.status === 400|| !resData||res.status === 404){
      setSpinner(false);
      
      Swal.fire({
       
       title:"Email is already registered",
       text:'Try with new email',
       icon:'info',
       confirmButtonText:'Cancel'

      })
    } if(res.status===201){
      setSpinner(false);
      
       navigate('/Login');
       Swal.fire({
       
        title:"Verification link sent to your mail, please check it",
        text:'Click to that link for email verification',
        icon:'success',
        confirmButtonText:'Cool'

       })
      
      }}
    else{
      setSpinner(false);
      Swal.fire({
       
        title:"New Password and Confirm Password does not match ",
        text:'Check your password',
        icon:'error',
        confirmButtonText:'Close'

       })
    }
    }
      else{
        setSpinner(false);
        Swal.fire({
       
          title:"Weak password",
          text:'Your password need to include both lower and upper case characters, at least one number, at least one symbol and be at least 8 characters long.',
          icon:'info',
          confirmButtonText:'Cancel'
  
         })
      }
      } else {
        setSpinner(false);
        Swal.fire({
       
          title:"Invalid Email",
          text:'Please enter correct email',
          icon:'error',
          confirmButtonText:'Close'
  
         })
      }
    
    
}


    return <>
     {spinner? (
    <div style={{marginTop:"50vw",display:"flex",justifyContent:"center"}}>
    <ThreeCircles
  color="blue"
  height={110}
  width={110}
  ariaLabel="three-circles-rotating"
/>
    </div>
      ) : (<>
        <ImageCard img={login} title="" size="70" align="left" ml="4%"/>
    <div className='container div1'>
      <h1 >Signup</h1>
        <form  className="formdiv">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Full Name</label>
          <input type="text" class="form-control" name="name" onChange={handle} id="inputName"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email Id</label>
          <input type="email" class="form-control" name="email" onChange={handle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Institute Name</label>
          <input type="text" class="form-control" name="instituteName" onChange={handle} id="inputInstitute"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">New Password</label>
          <input type="password" class="form-control" name="password" onChange={handle} id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" name="confirmPassword" onChange={handle} id="exampleInputPassword2"/>
        </div>
        <div className='butt'>
        <button type="submit" onClick={validation} class="btn button">SignUp</button></div>
        
      </form>
      </div></>
      )}
    
      </>
    
}
