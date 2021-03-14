import React from 'react'
import './pages.css'

function Contribution() {
    return(
        <>  
        <br/>
            <div className='container'>
                <div className='bg-whight'>
                    <h3>New Contribution </h3>
                    <br/>
                    <div className='row'>
                        <div className='col-md-6'>
                        <label class="form-label" for="form5Example1">Person or Envelope Number</label>
                        <select class="form-control">
                            <option selected=""></option>
                            <option>Sunday School</option>
                            <option>Manday School</option>
                            <option>Friday School</option>
                        </select>
                        <div className='row'>
                            <div className='col'>
                            <br/>
                            <label class="form-label" for="form5Example1">Amount</label>
                            <input type='number' class="form-control" />
                            </div>
                            
                            <div className='col'>
                            <br/>
                            <label class="form-label" for="form5Example1">Funds</label>

                            <select class="form-control">
                           
                            <option selected=""></option>
                            <option>Sunday School</option>
                            <option>Manday School</option>
                            <option>Friday School</option>
                            </select>
                            </div>

                        </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col'>
                                <label class="form-label" for="form5Example1">Method</label>
                                <select class="form-control">
                                    <option selected=""></option>
                                    <option>Sunday School</option>
                                    <option>Manday School</option>
                                    <option>Friday School</option>
                                </select>

                                </div>
                                <div className='col'>
                                <label class="form-label" for="form5Example1">Date</label>
                                <input type='date' class="form-control" />
                                </div>
                                
                            </div>
                            <br/>
                            <label class="form-label" for="form5Example1">Date</label>
                            <input type='number' class="form-control" />

                            
                        </div>

                    </div>
                    <br/>
                    <button type="button" class="btn btn-primary pull-right">Add New Contribution   </button>
                <br/>
                <br/>
                </div>

            </div>
        </>
    )
}

export default Contribution