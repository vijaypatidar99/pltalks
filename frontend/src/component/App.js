
import './App.css';

import {  Routes, Route } from 'react-router-dom';
import ProfilePage from "./ProfilePage"
import InterviewExperiencePage from "./InterviewExperiencePage";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import React,{createContext,useReducer} from 'react';
import { initialState,reducer } from '../reducer/UseReducer';
import Logout from "./Logout";
import Admin from "./Admin"
import About from "./About"

export const UserContext=createContext();

function App() {
const [state,dispatch]=useReducer(reducer,initialState);

  return (

  <div style={{backgroundColor:"#f9f9f9"}} className="maindiv">
  <UserContext.Provider value={{state,dispatch}}>
  
  <Navbar/>
    <Routes>
  
           
           <Route  path="/myprofile" element={<ProfilePage/>}/>
           <Route  path="/" element={<InterviewExperiencePage/>}/>
           <Route  path="/login" element={<Login/>}/>
           <Route  path="/signup" element={<Signup/>}/>
           <Route path="/Logout" element={<Logout/>}/>
           <Route path="/Admin"  element={<Admin/>}/>
           <Route path="/About" element={<About/>}/>
           <Route path='*' exact={true} element={<PageNotFound/>}/>
           
             
   </Routes>
   </UserContext.Provider>
   <Footer/>
  </div>
  );
}

export default App;
