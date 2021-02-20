import React from 'react'
import g from '../images/g.jpg'
import phone from '../images/phone.png'
import emal from '../images/emal.png'
import help1 from '../images/help1.png'
import ch34 from '../images/ch34.jpg'
function Contanct(){
    return(
        <>
        <section className='contact'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-md-6'>
                    <h2>Our purpose is to provide you with the highest 
                    quality of services and assistance in the most efficient manner.</h2>

                <p>We connect to our customers through live chat and live assistance.</p>
                </div>
                <div className='col-md-6'>
                <img src={g} class="img-fluid" alt="..." /> 
                </div>
            </div>
            </div>
        </section>
        <br/>
        <section className='call'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <center>
                    <img src={phone} class="img-fluid" alt="..." /> 
                    </center>
                    <h2 class="text-center">Phone </h2>
                        <p>Have a question about Breeze that you'd 
                            like to talk through? Give us a call and we'd love to help.</p>
                        <div className='btn-contect'>
                            <p>Resource@givy.org</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <center>
                    <img src={emal} class="img-fluid" alt="..." /> 
                    </center>
                    <h2 class="text-center">Email</h2>
                        <p>We'd love to help answer any questions you 
                            might have. Shoot us an email and we'll be glad to help.</p>
                            <div className='btn-contect'>
                                <p>+254 773 463 319</p>
                            </div>
                    </div>
                    <div className='col-md-4'>
                    <center>
                    <img src={help1} class="img-fluid" alt="..." /> 
                    </center>
                        <h2 class="text-center">Help Center</h2>
                        <p>Looking for answers right away? Visit our help 
                            center and find just what you're looking for.</p>
                    
                            <div className='btn-contect'>
                                <p>Help@givy.org</p>
                            </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='contact-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                    <img src={ch34} class="img-fluid shadow-2-strong" alt="..." /> 
                    </div>
                    <div className='col-md-6'>
                    <p>The best church and non-profitmanagement system you need to run your business</p>
                    </div>
                </div>
        `   </div>
        </section>
        </>
    )
}
export default Contanct