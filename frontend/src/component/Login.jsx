
import React,{useState,useContext,useEffect} from 'react'
import "./Login.css"
import ImageCard from "./ImageCard";
import login from "./Images/login.jpg";
import { UserContext } from './App';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function Login() {
  const [data,setdata]=useState([]);
  const {state,dispatch} = useContext(UserContext);
  const [alignment, setAlignment] = React.useState('user');
  let navigate=useNavigate();
  useEffect(() => {
    if(state)
    navigate("/myprofile");
  },[])
 
  const handleChange = ( e) => {
    setAlignment(e.target.value);
  };

 function handle(e){
     e.preventDefault();
   const name = e.target.name;
    const value = e.target.value;
    setdata({...data,[name]:value});
 }
 //console.log(data);

async function callapi(e){
    e.preventDefault();

if(alignment==='user'){
      const res = await fetch('/login',{
        method:"POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(data)
      })
      const resData=res.json();
  if(res.status === 400|| !resData){
    Swal.fire({
       
       title:"Invalid Credentials",
       text:'Please enter correct email or password',
       icon:'error',
       confirmButtonText:'Cancel'

      })
  }
  else{
    dispatch({type:"USER",payload:true});
    navigate("/myprofile");
    Swal.fire({
       
       title:"Login Successful",
       position:"top",
       icon:'success',
       showConfirmButton:false,
       timer:2000

      })
      
    };}
    else{
      const res = await fetch('/admin/login',{
        method:"POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(data)
      })
      const resData=res.json();
      //console.log(resData);
  if(res.status === 400|| !resData){
    Swal.fire({
       
       title:"Invalid Credentials",
       text:'Please enter correct email or password',
       icon:'error',
       confirmButtonText:'Cancel'

      })
  }
  else{
    dispatch({type:"USER",payload:true});
    navigate("/Admin");
    Swal.fire({
       
       title:"Login Successful",
       position:"top",
       icon:'success',
       showConfirmButton:false,
       timer:2000

      })
      
    };
    }

  }
   


    return <>
    <ImageCard img={login} title="" size="70" align="left" ml="4%"/>
    <div className='container div1'>
      <h1 >Login</h1>
      


      

        <form  className="formdiv" method='POST'>
        <div className='container-fluid' style={{display:"flex",justifyContent:"center"}}>
        <ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
>
  <ToggleButton value="user" style={{fontWeight:"900"}}>User</ToggleButton>
  <ToggleButton value="admin" style={{fontWeight:"900"}}>admin</ToggleButton>
  
</ToggleButtonGroup>
</div>
 <hr/>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="text" class="form-control" name="email" onChange={handle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
         
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" name="password" onChange={handle} id="exampleInputPassword1"/>
        </div>
      
        <div className='butt'>
        <button type="submit" onClick={callapi} class="btn button">Login</button></div>



       
        
      </form>
      </div>
      </>
    
}
