import React, { Component } from 'react';
import Logo from '../../images/medicoz-logo.png';

class MainHeader extends Component {
    render() {
        return (
            
                 <div>
           
           <div className="header_sect">
           <nav className="navbar navbar-expand-lg navbar-dark fixed-top sticky-top">
 <div className="container">
   <a className="navbar-brand" href="/"><img src={Logo} width="150px" alt="logo" /></a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon" />
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Hyderabad
         </a>
         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a className="dropdown-item" href="/">Action</a></li>
           <li><a className="dropdown-item" href="/">Another action</a></li>
           <li><a className="dropdown-item" href="/">Something else here</a></li>
         </ul>
       </li>
       
       <li className="nav-item">
         <a href="/BookOnlineDr" className="nav-link" aria-current="page">Consult Dr</a>
       </li>
       
       <li className="nav-item">
         <a className="nav-link" href="/">Buy medicines</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/">Lab test</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/DrLogin">Login</a>
       </li>
       <li className="nav-item">
         <a href="/NewuserAccount" className="nav-link">Signup</a>
       </li>
     </ul>
   </div>
   {/*navbar-collapse-ends-here*/}
 </div>
 {/*container-ends-here*/}
</nav>



{/*navbar-ends-here*/}

           </div>
      
           </div>
           
        );
    }
}

export default MainHeader;