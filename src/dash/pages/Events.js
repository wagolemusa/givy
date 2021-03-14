import React from 'react'
import './pages.css'

function Events(){
    return(
        <>

<div class="bg-whight">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-9'>
                        <button type="button" class="btn  btn-outline-success" data-toggle="modal" data-target="#exampleModal">
                        <i class="far fa-plus-square"></i> &nbsp;&nbsp;  Create Event
                        </button>                  
                </div>
                <div className='col-md-3'>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control"  placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn-primary1">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
       
            <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Greate Events</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div className='grew-color'>
                        <div className='row'>
                            <div className='col'>
                                <label class="form-label" for="form5Example1">Title
                                </label>
                                <input type="text" class="form-control" placeholder="Title" /> 
                            </div>
                            <div className='col'>
                                <label class="form-label" for="form5Example1">Date</label>
                                <input type="date" class="form-control" placeholder="" /> 
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label class="form-label" for="form5Example1">Start Time</label>
                                <input type="time" class="form-control" placeholder="" /> 
                            </div>
                            <div className='col'>
                                <label class="form-label" for="form5Example1">End Time</label>
                                <input type="time" class="form-control" placeholder="" /> 
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Events