import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-sm fixed-top  green darken-1">
        <a class="navbar-brand" href="#">
          <Link to='/' className='navbar-logo'>
            Givy  <i class='fab fa-typo3' />
          </Link>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav">

          <ul class="navbar-nav mr-auto">
          <Link 
              to='/About'
              className='nav-link'>
                About us
            </Link>
          <Link 
              to='/Events'
              className='nav-link'>
              Events
            </Link>

            <Link 
              to='/Blogs'
              className='nav-link'>
              Projects
            </Link>
            <Link 
              to='/Campaigns'
              className='nav-link'>
              Campaigns
            </Link>
            <Link 
              to='/Contanct'
              className='nav-link'>
              Contact Us
            </Link>
          </ul>

          <form class="form-inline">
          <Link 
              to='/pray'
              className='nav-link'>
              Join us
            </Link>
          <Link 
              to='/login'
              className='nav-link'>
              Login
            </Link>

            <div className='donate'>
            <Link
              to='/donate' 
              className='nav-link'>
              Give
            </Link>
            </div>
          </form>
        </div>
      </nav>

    </>
  )
}
export default Nav


