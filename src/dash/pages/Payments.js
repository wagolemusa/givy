import React from 'react'

function Payments() {
    return(
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-9'>
                        <button type="button" class="btn btn-outline-success my-example-model" data-toggle="modal" data-target="#fullHeightModalRight">
                        <i class="far fa-plus-square"></i> &nbsp;&nbsp; Add Method 
                        </button>                    
            </div>
                </div>
                <div className='col-md-3'>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn-primary1">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </div>
            </div>
            </nav>
        {/* Table */}
        <br/>
        <div className='container'>
            <h4>Payment Methods </h4>
            <div className='bg-whight'>
                <ul>
                    <li><h4>Name</h4></li>
                    <hr/>
                    <li>Card</li>
                    <hr/>
                    <li>Cash</li>
                    <hr/>
                    <li>Check</li>
                    <hr/>
                    <li>Online</li>
                </ul>
            </div>
        
        </div>
  

        {/* model Form */}
        <div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">

            <div class="modal-dialog modal-full-height modal-right" role="document">


            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title w-100" id="myModalLabel">Add Method</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                
            <form>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Method Name</label>
                    <input type="text" id="form4Example1" class="form-control" />
                    
                </div>

            </form>
                
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Payments