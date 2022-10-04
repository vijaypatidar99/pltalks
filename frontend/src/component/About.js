import React from "react"
import "./about.css"
import myphoto from "./Images/myphoto.jpeg";



function About(){
return <>
    <div className="about-section">
  <h1 style={{color:"rgb(76, 78, 75)"}}>About Us</h1>
 

</div>

{/* <h2 style={{textAlign:"center"}}> </h2> */}
<div className="row" style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
  <div className="column">
    <div className="card" style={{display:"flex",justifyContent:"center"}}>
      <img className="aboutImg" src={myphoto} alt="Jane" style={{height:"220px",width:"50%",marginLeft:"25%"}}/>
      <div className="container">
        <h2>Vijay Patidar</h2>
        <p className="title">Project Manager & Developer</p>
        <p>I am Vijay Patidar and i'm a Programmer and web developer. Currently i am the student of Master of computer application in National Institute of Technology, Raipur. I am also working on Penetration testing web development project</p>
   
        <form action="https://github.com/vijaypatidar99" method="get" target="_blank">
         <button className="button" type="submit">Github</button>
      </form>
      <hr/>
        <form action="https://www.linkedin.com/in/vijay-patidar-951a16206" method="get" target="_blank">
         <button className="button" type="submit">Linkedin</button>
      </form>
      <hr/>
      <form action="https://www.instagram.com/v_4_vijayy/" method="get" target="_blank">
         <button className="button" type="submit">Instagram</button>
      </form>
      
      </div>
    </div>
  </div>

  {/* <div className="column">
    <div className="card">
      <img src="/w3images/team2.jpg" alt="Mike" style={{width:"100%"}}/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="/w3images/team3.jpg" alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div> */}
</div>
</>
}
export default About