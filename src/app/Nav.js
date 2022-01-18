import React from 'react'
import './Appstyle.css'
import { Link } from 'react-router-dom';

function Nav (){
    return(
      <div>
<nav class="navbar navbar-expand-sm fixed-top navbar-dark amber darken-4">
   <a class="navbar-brand" href="#">
   <Link to='/' className='navbar-logo'>
            Givy
            <i class='fab fa-typo3' />
           </Link>
   </a>
 
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
     aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
 
   <div class="collapse navbar-collapse" id="basicExampleNav">
 
     <ul class="navbar-nav mr-auto">
       <li class="nav-item" style="color: #ffffff; font-weight: 500;">
         <a class="nav-link" href="index.html">Home
         </a>
       </li>
      
       <li class="nav-item" style="color: #ffffff; font-weight: 500;">
         <a class="nav-link" href="./UI/pages/pricing.html">Pricing</a>
       </li>
     </ul>
 
     <form class="form-inline">
      
         <a class="nav-link" href="./UI/pages/login.html" style="color: #ffffff; font-weight: 500;">Login</a>
         <a class="nav-link" href="./UI/pages/register.html" style="color: #ffffff; font-weight: 500;">Register</a>


     </form> 
   </div>
 </nav>
        </div> 
  

    )
}

export default Nav;