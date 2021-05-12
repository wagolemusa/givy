import React from 'react'
import './Appstyle.css'
import { Link } from 'react-router-dom';

function Nav (){
    return(
      <div>
    <nav class="navbar navbar-expand navbar-dark"> <a href="#menu-toggle" id="menu-toggle" class="navbar-brand">
        <span class="navbar-toggler-icon"></span></a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation"> 
        <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarsExample02">
            <div className="adm">
                <h3>Admin</h3>
            </div>
                <ul class="navbar-nav">
                   
                    <div className="left1">
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-user-plus"></i>&nbsp;&nbsp;Kisumchurch</a>
        
                <ul>
                    
                    <li class="nav-item"><a class="nav-link" href="#">My Giving</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Account</a></li>
                </ul>        
                </li>
                </div>
            </ul>
            </div>
        </nav>
        <div id="wrapper" class="toggled">
            
            <div id="sidebar-wrapper">
                {/* <ul class="sidebar-nav">
                    <li class="sidebar-brand"> <a href="#"> Start Bootstrap </a> </li>
                    <li> <a href="#">Dashboard</a> </li>
                    <li> <a href="#">Shortcuts</a> </li>
                    <li> <a href="#">Overview</a> </li>
                    <li> <a href="#">Events</a> </li>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Services</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul> */}
                <ul class="sidebar-nav">
                    <li>
                    <Link to='/app/Giver'><i class="fas fa-hand-holding-usd">&nbsp;&nbsp;</i>Giver</Link>
                    </li>
                    <li>
                    <Link to="/app/Recuring"><i class="fas fa-list"></i>&nbsp;&nbsp; Recuring</Link>
                    </li>
                    <li>
                    <Link to="/app/Givingflow"><i class="fas fa-dollar-sign"></i>&nbsp;&nbsp;Giving Flow</Link>
                    </li>
                    <li>
                    <Link to="/app/Setting"><i class="fas fa-cog"></i>&nbsp;&nbsp;Setting</Link>
                    </li>
                    <li>
                    <Link to={'/'} onClick={() => localStorage.clear()}><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout</Link>
                    </li>
                </ul>
            </div> 
           
            {/* <div id="page-content-wrapper">
                <div class="container2">
                    <h1>Simple Sidebar</h1>
                    <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                    <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
                </div>
            </div>  */}
        </div> 
        </div>

    )
}

export default Nav;