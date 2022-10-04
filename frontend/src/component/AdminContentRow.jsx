import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import PopupCard from './PopupCard';
function Row(output){
const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('body');
  const [update,setUpdate] = React.useState("Pending");

  const handleClickOpen = (e) => () => {
    setOpen(true);
    setScroll('body');
  };

  React.useEffect(() => {
    Buttons();
   
},[]);

  const handleClose = () => {
    setOpen(false);
  };

  function Buttons(){
    if("Pending"===output.status&&update==="Pending")
    return <>
       <button type="button" class="btn btn-success mr-3" onClick={()=>click({key:"Accept",email:output.email,id:output._id})}>Accept</button>
       <button type="button" class="btn btn-danger mr-3" onClick={()=>click({key:"Reject",email:output.email,id:output._id})}>Reject</button>
    </>
  return<></>
    
}


   

  async function click(data){
    try{
        
        const res = await fetch('/admin/records/update/'+data.key,{
          method: "PATCH",
          headers: {
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials: "include",
          body:JSON.stringify(data)
        });
         
         
        
         if(!res.status===200||res.status===401){
           
           const error =new Error(res.error);
           throw error;
           
         }
         setUpdate(data.key);
      }catch(err){
        //console.log(err);
       
      }
  }

  
    return (<>
        <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.company_name}</td>
                                <td>{output.date}</td>
                                <td> <div className='' style={{display:"flex",justifyContent:"space-around"}}>
                                <div>
      
      <Button onClick={handleClickOpen('body')} class="btn btn-primary mr-3">Read</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"

        style={{minWidth:"100%"}} 
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'} style={{width:"100%"}} >
          <DialogContentText
            id="scroll-dialog-description"
            // ref={descriptionElementRef}
            tabIndex={-1}
            style={{minWidth:"500px"}} 
          >
         <PopupCard
      key={output.id}
                company_name={output.company_name}
                name={output.name}
                course={output.course}
                eligibility={output.eligibility}
                round1={output.round1}
                round2={output.round2}
                round3={output.round3}
                round4={output.round4}
                round5={output.round5}
                status={output.status}

                
/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
      </Dialog>
    </div>      
    
         
        
  
     

     <Buttons />
 
</div></td>
                            </tr>
    </>)
}

export default Row;