import React from 'react'
import './pages.css'

function Events(){
    return(
        <>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Create Event
            </button>
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