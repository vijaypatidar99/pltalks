
import React,{useEffect,useState,useContext} from 'react'

import { UserContext } from './App';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Logout(){
    const {state,dispatch} = useContext(UserContext);
    let navigate=useNavigate();
    useEffect(() => {
        
        onvisit();
        
      }, []);
    
      async function onvisit(){
        try{
            const res = await fetch('/logout',{
              method: "GET",
              headers: {
                Accept:"application/json",
                "Content-Type":"application/json"
              },
              credentials: "include"
            });
            // const data = await res.json();
            
             dispatch({type:"USER",payload:false});
             navigate('/Login');
             if(!res.status===200||res.status===401){
               //navigate('/Login');
               const error =new Error(res.error);
               throw error;
               
             }
             
                
             
          }catch(err){
            navigate('/Login');
            console.log("logout"+err);
           
          }
      }
      console.log("logout3");
    return <>

    </>
}
export default Logout;