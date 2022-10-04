import React from "react";
import "./Navbar.css";
import { useEffect ,useContext} from "react";
import {NavLink} from "react-router-dom";
import { UserContext } from './App';
import PersonIcon from '@mui/icons-material/Person';
import logo from "./Images/logo.png";


function Navbar(){

  const [navTxt, setTxt] = React.useState("black");
  const {state,dispatch} = useContext(UserContext);
  
  
  
  function unset(e){
    
    
  }

 // console.log(window.scrollY);

  
    return <>
      <nav className={'navbar nav fixed-top justify-content-around navbar-expand-md  '}  >
  <div className="container divv">
    
    
    <div className="logo">
   <img  className="l-img " src={logo} alt="placement talks" />
    </div>

    <button className="navbar-toggler  toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa fa-bars"></i>
    </button>

    <div className="collapse  list justify-content-center navbar-collapse  navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
        <NavLink exact className={"nav-link navl active "} style={{color:navTxt}} activeClassName="navclass" to="/"  >Home</NavLink>
        </li>
    
        
       <li className="nav-item">
         <NavLink exact className={"nav-link navl active "} style={{color:navTxt}} activeClassName="navclass" to="/About"  >About</NavLink>
        </li>
        
       <div className="log1">
      { !state?
        <>
       <li className="nav-item login">
       <NavLink exact className={"nav-link navl active  "} style={{color:navTxt}} activeClassName="navclass" to="/Login"  >Login</NavLink>
        </li>
        <li className="nav-item login">
        <NavLink exact className={"nav-link navl active  "} style={{color:navTxt}} activeClassName="navclass" to="/Signup"  >Signup</NavLink>
        </li></>
        :
        <>
       <li className="nav-item login">
       <NavLink exact className={"nav-link navl active "} style={{color:navTxt}}  onClick={unset} activeClassName="navclass" to="/Logout"  >Logout</NavLink>
       
        </li>
        <li className="nav-item login">
       <NavLink exact className={"nav-link navl active "} style={{color:navTxt}}   activeClassName="navclass" to="/myprofile"  ><PersonIcon/></NavLink>
       
        </li>
        </>
        }
      
       </div>
       
        
      </ul>
    </div>


    

    <div className="log2">
    {!state?<>
      <ul className="navbar-nav ">
       <li className="nav-item login">
       <NavLink exact className={"nav-link navl active ll"} style={{color:navTxt}} activeClassName="navclass" to="/Login"  >Login</NavLink>
        </li>
        <li className="nav-item login">
        <NavLink exact className={"nav-link navl active ll"} style={{color:navTxt}} activeClassName="navclass" to="/Signup"  >Signup</NavLink>
        </li>
        </ul></>:
        <ul className="navbar-nav ">
        <li className="nav-item login ">
       <NavLink exact className={"nav-link navl active ll"}style={{color:navTxt}} onClick={unset} activeClassName="navclass" to="/Logout"  >Logout</NavLink>
       
        </li>
        <li className="nav-item login ">
       <NavLink exact className={"nav-link navl active profile ll"} style={{color:navTxt}} activeClassName="navclass" to="/myprofile"  ><PersonIcon/></NavLink>
       
        </li>
        </ul>
    }
   
        
       </div>
   
   
  </div>
</nav>
    </>
};
export default Navbar;