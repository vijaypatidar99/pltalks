import {useEffect,useState,useContext} from 'react';
import "./AdminCss.css";
import Sidebar from './AdminSidebar';
import { UserContext } from './App';
import { useNavigate } from "react-router-dom";
import { Filter } from '@mui/icons-material';
import Row from "./AdminContentRow"
 
 
 
const Dashboard = (props) => {
    const {state,dispatch} = useContext(UserContext);
   const[record,setRecord] = useState([])
   const[states,setStates] = useState([])
   const[filter,setfilter] = useState('Pending')
   const navigate = useNavigate();
   useEffect(() => {
    callStatesApi();
    callrecordApi(filter);
  },[])
   function sidebar(e){
    
    callrecordApi(e);
   }
 
   const callStatesApi = async()=>{
    try{
      const res = await fetch('/admin/userdata',{
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials: "include"
      });
       const data = await res.json();
       setStates(data);
       
      
       if(!res.status===200||res.status===401){
         navigate('/Login');
         const error =new Error(res.error);
         throw error;
         
       }
       dispatch({type:"USER",payload:true});
    }catch(err){
      //console.log(err);
      navigate('/Login');
    }
 }
 
 const callrecordApi =async (e)=>{
    try{
        setfilter(e);
        const res = await fetch('/admin/records/'+e,{
          method: "GET",
          headers: {
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials: "include"
        });
         const data = await res.json();
         setRecord(data);
         
        
         if(!res.status===200||res.status===401){
           navigate('/Login');
           const error =new Error(res.error);
           throw error;
           
         }
      }catch(err){
        //console.log(err);
       
      }
 }


  
    
 
    return (<>
        <Sidebar
            side={sidebar}
        />
    <div class="col main pt-5 ">
         
        <hr/>
        <p class="lead d-none d-sm-block">User And Post Statistics</p>
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">{states.total}</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">{states.post}</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                        <i class="fa fa-spinner fa-4x" ></i>
                        </div>
                        <h6 class="text-uppercase">Panding post</h6>
                        <h1 class="display-4">{states.pending}</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                        <i class="fa fa-times-circle-o fa-4x" aria-hidden="true"></i>
                        </div>
                        <h6 class="text-uppercase">Reject posts</h6>
                        <h1 class="display-4">{states.reject}</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
        
       
        <div class="row ">
            <div class="col-lg-12 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
              {filter} Posts
              </h5>
                <div class="table-responsive">
                    <table class="table table-hover bg-white">
                        <thead class=" table-danger">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>company</th>
                                <th>Record Data</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.map((output,index)=>
                          <Row
                            id={index}
                            company_name={output.company_name}
                            email={output.email}
                            date={output.date_of_interview}
                name={output.name}
                course={output.course}
                eligibility={output.eligibility}
                round1={output.round1}
                round2={output.round2}
                round3={output.round3}
                round4={output.round4}
                round5={output.round5}
                status={output.status}
                _id={output._id}
                filter={filter}
                          />
                            
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>




    </div>
    </>)
}
 
export default Dashboard