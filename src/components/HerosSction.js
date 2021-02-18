import React from 'react'
// import { Button } from './Button';
import './Navbar.css'
import ff from './ff.png'
import agency from './images/agency.png'
import '../App.css'

function HeroSection(){
    return(
        <>
        <section class="homepage">
            <div className='hero-container'>
                <h1>The evolution of church and non-profit management software</h1>
                <p>What are you waiting for ?</p>
                <div className='hero-btns'>
                <button type="button" class="btn btn-primary">
                    GET STARTED
                </button>
                <button type="button" class="btn btn-danger">
                    Sign Up<i className='far fa-play-circle'/>
                </button>
                </div>
            </div>
        </section>

        <section className='homesection'>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-md-6'>
                        <h2>A giving platform
                            built for churches like yours.
                        </h2>
                        <p>Our tools enable your church to give securely from anywhere, at any time</p>
                        <div className='row'>
                            <div className='col'>
                                <button type="button" class="btn btn-danger">
                                    Sign-up
                                </button>
                            </div>
                            <div className='row'>
                                <div className='col-md-2'>
                                <i class="fas fa-church"></i>
                                </div>
                                &nbsp;&nbsp;
                                <div className='col-md-8'>
                                690 churches joined in the last 30 days.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <img src={agency} class="img-fluid" alt="..." />  
                    </div>
                </div>
            </div>
        </section>

        <section className='giving-section'>
            <div className='container-fluid'>
            <h1>Introducing the Givy.I0 platform</h1>
            <h3>All the tools you need to run your church.</h3>
            <br/><br/><br/>
                <div className='row'>
                    <div className='col-md-3'>
                        <i class="fas fa-cloud-moon"></i><br/><br/>
                        <h2>Events</h2>
                        <p>A management platform to manage both paid and unpaid events. 
                            Best event management system on the market.
                        </p>
                        <div className='more'>
                           <a href='#'>LEARN MORE &nbsp;&nbsp; <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <i class="fas fa-hand-holding-usd"></i><br/><br/>
                        <h2>Giving Platform</h2>
                        <p>An all-in-one advanced platform to take care of church giving 
                            needs from Mobile, kiosk, offline text to give.
                        </p>
                        <div className='more'>
                           <a href='#'>LEARN MORE &nbsp;&nbsp; <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <i class="fas fa-journal-whills"></i><br/><br/>
                        <h2>Booking Keeping</h2>
                        <p>With Givy, the need of carrying books has ended. 
                            It's an all-in-one solution for managing groups and websites
                        </p>
                        <div className='more'>
                           <a href='#'>LEARN MORE &nbsp;&nbsp; <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    
                        <i class="fas fa-cross"></i><br/><br/>
                        <h2>CHMS</h2>
                        <p>Church management has never been easy. 
                            With our system, all works are in one place with our advanced system. 
                        </p>
                        <div className='more'>
                           <a href='#'>LEARN MORE &nbsp;&nbsp; <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
    )
}

export default HeroSection;