import React from 'react'
// import { Button } from './Button';
import './Navbar.css'
import pi from './pi.png'
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpeg'
import p8 from './images/p8.jpg'
import p4 from './images/p4.jpg'
import agency from './images/agency.png'
import '../App.css'
import { Link } from 'react-router-dom';
import Campain from './pages/Campain'

function HeroSection(){
    return(
        <>
             <div className='container-fluid'>
                <div className='hero-container'>
                    <div className='row'>
                    
                        <div className='col-md-6'>

                            <h1>Increase giving <br/> <span>Grow your church</span></h1>
                            <p>helps you increase giving and simplify the lives of your staff with software and tools built for churches.</p>
                          
                            <div className='hero-btns'>
                            <Link to='/pray'  type="button" class="btn btn-success nav-button px-3">
                                Pray With Us
                            </Link>

                            <Link to='/login' button type="button" class="btn btn-danger">
                                    Sign Up<i className='far fa-play-circle' />
                            </Link>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='img-style'>
                                <img src={pi} class="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        {/* <section class="homepage">
           
    
        </section> */}

        <section className='homesection'>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-md-3'>
                        <div className='back-ground-cards'>
                            <img src={p1} alt='itcon' />

                                <Link to="/Show">Power Words that Evoke a Love of Money</Link>
                        
                            <p>Grateful for the Kernel community. I've learned a lot over the past 8
                                weeks and look forward to watching... 
                            
                                <Link to="/Show" style={{fontSize: '16px', paddingLeft: '30px', color: 'green'}}>Read More</Link> 👋
                                
                            </p><br/>
                            
                            <div className='created-by'>
                            <button type="button" class="btn btn-danger">Donate</button>
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='back-ground-cards'>
                            <img src={p2} alt='itcon' />
                            <Link to="/Show">Then he said to the disciple:</Link>
                            <p>Jesus and Mary are together again, at the beginning 
                                of his ministry in Cana and now at the end of his public 
                                <Link to="/Show" style={{fontSize: '16px', paddingLeft: '30px', color: 'green'}}>Read More</Link> 👋
                            </p><br/>
                            
                            <div className='created-by'>
                            <button type="button" class="btn btn-danger">Donate</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='back-ground-cards'>
                            <img src={p8} alt='itcon' />
                            <Link to="/Show">Power Words that Evoke a Love of Money</Link>
                            <p>Grateful for the Kernel community. I've learned a lot over the past 8
                                weeks and look forward to watching...  
                                <Link to="/Show" style={{fontSize: '16px', paddingLeft: '30px', color: 'green'}}>Read More</Link> 👋👋
                            </p><br/>
                            
                            <div className='created-by'>
                            <button type="button" class="btn btn-danger">Donate</button>
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='back-ground-cards'>
                            <img src={p4} alt='itcon' />
                            <Link to="/Show">My God, my God, why have you forsaken me</Link>
                            <p>This was the only expression of Jesus in the Gospels of Matthew and Mark. 
                                Both Gospels related that it was in the ninth hour, after 3 hours of darkness  
                                <Link to="/Show" style={{fontSize: '16px', paddingLeft: '30px', color: 'green'}}>Read More</Link> 
                            </p>
                            
                            <div className='created-by'>
                            <button type="button" class="btn btn-danger">Donate</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Campain/>

        <section className='giving-section'>
            <div className='container'>
            <h1>Come and pray with Us</h1>
            <h3>True prayer is a way of life, not just for use in cases of emergency.<br/>
                 Make it a habit, and when the need arises you will be in practice." </h3>
             <Link
              to='/pray' 
              className='nav-link' class="pray">
              Join Our Prayers
            </Link>

            </div>
        </section>   
    </>

    )
}

export default HeroSection;