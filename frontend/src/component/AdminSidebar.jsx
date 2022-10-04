import React from 'react'
const Sidebar = (props) => {
    function fun(e){
        props.side(e);
    }
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#435971"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-light" href="#" ><h6>Vijay Patidar</h6></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-light" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                
                <li class="nav-item mb-2" ><a class="nav-link text-light" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3" onClick={()=>{fun("Pending")}}>Pending Posts</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-light" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3" onClick={()=>{fun("Accept")}}>Verified Posts</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-light" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3" onClick={()=>{fun("Reject")}}>Rejected Posts</span></a></li>

            </ul>
       </div>
    )
}
 
export default Sidebar