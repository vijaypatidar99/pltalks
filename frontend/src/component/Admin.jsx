import React, { useState } from 'react';
import Sidebar from './AdminSidebar';

import Content from './AdminContent';


function Admin() {
  

    return (
        <div>
        
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
         
          <Content
            
          />
        
     </div>
    </div>  
</div>  
    );
  
}

export default Admin;