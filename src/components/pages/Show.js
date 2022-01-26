import React, { Component } from 'react'
import p1 from '../images/p1.jpg'

class Show extends Component {
    render() {
        return (
            <section className='show-page'>
                <div className='container'>
           
                <div className='fix-10-12'>
                         
                            <h1>Power Words that Evoke a Love of Money</h1>
                           
                           <div className='row'>
                               <div className='col-md-6'>
                               <button type="button" class="btn btn-danger">Donate</button>
                               </div>
                               <div className='col-md-6'>
                               <h2>26 january 2022</h2>
                               </div>
                           </div>
                            <img src={p1} alt='itcon'  class="img-fluid" alt="Wild Landscape" />
                            <p>Grateful for the Kernel community. I've learned a lot over the past 8 weeks and look forward to watching
                             
                                Grateful for the Kernel community. I've learned a lot over the past 8 weeks and look forward to watching..
                             
                                Grateful for the Kernel community. I've learned a lot over the past 8 weeks and look forward to watching..
                            </p>


                    </div>
                </div>
            </section>
        )
    }
}

export default Show