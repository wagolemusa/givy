import React from 'react'

function Funds() {
    return(
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-9'>
                        <button type="button" class="btn btn-primary my-example-model" data-toggle="modal" data-target="#fullHeightModalRight">
                            Add Funds
                        </button>                    
            </div>
                </div>
                <div className='col-md-3'>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control"  placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </div>
            </div>
            </nav>
        {/* Table */}
        <br/>
        <div className='container'>
            <div class="table-responsive bg-light">
                <table class="table">
                    <thead>
                        <tr>
                                    
                        <th scope="col">Fund Name</th>
                            <th scope="col">Fund ID </th>
                            <th scope="col">  Tax Deductible </th>
                                <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                    
                                        <td>General Fund </td>
                                        <td></td>
                                        <td>yes</td>
                                        <td>
                                        <div class="btn-group show-on-hover">
                                            <div class="btn btn-default show-on-hover" data-toggle="dropdown">
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <ul class="dropdown-menu" role="menu">
                                                <div className='downmenu'>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                </div>
                                        
                                            </ul>
                                        </div>
                                        </td>
                                        </tr>
                                        <tr>
                                    
                                        <td>Building Fund </td>
                                        <td></td>
                                        <td>yes</td>
                                        <td>
                                        <div class="btn-group show-on-hover">
                                            <div class="btn btn-default show-on-hover" data-toggle="dropdown">
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <ul class="dropdown-menu" role="menu">
                                                <div className='downmenu'>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                </div>
                                        
                                            </ul>
                                        </div>
                                        </td>
                                        </tr>
                                        <tr>
                                    
                                        <td>Youth Ministries Fund </td>
                                        <td></td>
                                        <td>No</td>
                                        <td>
                                        <div class="btn-group show-on-hover">
                                            <div class="btn btn-default show-on-hover" data-toggle="dropdown">
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <ul class="dropdown-menu" role="menu">
                                                <div className='downmenu'>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                </div>
                                        
                                            </ul>
                                        </div>
                                        </td>
                                    
                                        </tr>

                                    </tbody>
                                    </table>
                                </div>
                            </div>


        {/* model Form */}
        <div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">

            <div class="modal-dialog modal-full-height modal-right" role="document">


            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title w-100" id="myModalLabel">Add Funds</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                
            <form>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Fund Name</label>
                    <input type="text" id="form4Example1" class="form-control" />
                    
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Fund ID</label>
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

export default Funds