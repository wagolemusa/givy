import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
function Nav(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navStyle">
     <a class="brand-navbar" href="#"> 
            </a> 
            <Link to='/' className='navbar-logo'>
            Givy
            <i class='fab fa-typo3' />
          </Link>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
                <span><i class="fas fa-align-right iconStyle"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="mainMenu">
                <ul class="navbar-nav ml-auto navList">
                    <li class="nav-item">
                    <Link to='/' className='nav-link'>
                        Overview
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link
                        to='/features'
                        className='nav-link'>
                    Features
                    </Link>
                    </li>

                    <li class="nav-item">
                    <Link
                        to='/pricing'
                        className='nav-link'>
                        Pricing
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link
                        to='/contact'
                        className='nav-link'>
                    Contact Us
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link
                        to='/login'
                        className='nav-link'>
                            <button class="btn btn-round nav-button px-3 mr-2" type="button">Login</button>
                       
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link
                to='/Siginup'>
                <button class="btn btn-tangerine btn-round nav-button px-3" type="button">Start For Free</button>
              </Link>
                    </li>
                </ul>
            </div>
        </nav>

        </>
    )
} 
export default Nav
