import React,{useState} from "react";
import "./FormCard.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Form(){
  let navigate=useNavigate();
  const [date, setDate] = useState(new Date());

  const [textarea, setTextarea]=useState([{}]);
  const [data, setData]=useState();
let name,value;
  function handleInputs(e){
    name = e.target.name;
    value = e.target.value;
    setData({...data,[name]:value});
  }
  function handleChange(i,e){
    const value=[...textarea];
    value[i][e.target.name]=e.target.value;
    setTextarea(value);

  }
  
  let round=1;
  
  
  function onAdd(){
    setTextarea([...textarea,{}]);

  }
  function onRemove(){
    const value=[...textarea];
    value.pop();
    setTextarea(value);
    const rd="round"+(round-1);
    
    const valuee="";
    setData({...data,[rd]:valuee});

  }
  async function fun(){
    
    data.date_of_interview=date.toString().slice(4,15);
    console.log(data);

    
      const res = await fetch('/account',{
        method: "POST",
        headers: {
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials: "include",
        body:JSON.stringify(data)
      });
      const resData=res.json();
  if(res.status === 401|| !resData){
    navigate("/login");
    Swal.fire({
     
       title:"Invalid Credentials",
       text:'Error',
       icon:'error',
       confirmButtonText:'Cancel'

      })
  }
  else{
    navigate("/myprofile");
    Swal.fire({
       
       title:"post Successful",
       position:"top",
       icon:'success',
       showConfirmButton:false,
       timer:2000

      })
    }




    
    
  }
  

    return <>
    <form>
    <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" name="name" onChange={handleInputs} class="form-control" id="exampleFormControlInput1" placeholder="full name"/>
</div>

 <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Company Name</label>
  <input type="text" name="company_name" onChange={handleInputs} class="form-control" id="exampleFormControlInput1" placeholder="company name"/>
</div>

<div class="mb-4">
<label for="exampleFormControlInput1" class="form-label">Course</label>
  <input type="text" name="course" onChange={handleInputs} class="form-control" id="exampleFormControlInput1" placeholder="your course"/>
</div>


 <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Role</label>
  <select class="form-control form-select  " name="role" onChange={handleInputs} aria-label=".form-select-sm example" placeholder="Select Interview Experience">
  <option value="" selected disabled>Select role</option>
  <option value="Ibternship">Internship</option>
  <option value="Software Development Engineer (FTE)">Software Development Engineer (FTE)</option>

</select>
</div>
 <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Date of interview</label>
  <div >
  <DatePicker className="date form-control"
  
  name="dat"
   selected={date} 
  
   dateFormat='dd/MM/yyyy'
   showYearDropdown
   onChange={date => setDate(date)} 
 />
  </div>
</div>
    <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Eligibility</label>
  <input type="email" onChange={handleInputs} name="eligibility" class="form-control" id="exampleFormControlInput1" placeholder="Eligibility/min CGPA required"/>
</div>

{textarea.map((x,i)=>{ return <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Round {round++}</label>
  <textarea class="form-control" onChange={(e)=>{handleChange(i,e);handleInputs(e)}} id="exampleFormControlTextarea1" name={"round"+(round-1)} rows="3"  style={{whiteSpace:"pre-wrap"}}></textarea>
</div>})}
 <div className="d-flex justify-content-end mb-4">{round<6 && <button type="button" className=" border rounded me-2" onClick={()=>{  onAdd();}} ><AddIcon sx={{ color:"red" }}  /></button>}
 <button type="button" className=" border rounded " onClick={()=>{  onRemove();}} ><RemoveSharpIcon sx={{ color:"red" }} /></button></div>
</form>
      <div className="modal-footer position-relative">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={fun} className="btn btn-primary">Post</button>
      </div>
    </>
};
export default Form;