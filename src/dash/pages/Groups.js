import React from 'react'
import './pages.css'

function Groups(){
    return(
        <>
            <div class="bg-whight">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-9'>
                        <button type="button" class="btn btn-outline-success my-example-model" data-toggle="modal" data-target="#fullHeightModalRight">
                        <i class="far fa-plus-square"></i> &nbsp;&nbsp; Add Groups
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
        {/* Table */}
        <br/>
        <div className='container'>
            <div class="table-responsive bg-whight">
                <table class="table">
                    <thead>
                        <tr>
                                    
                        <th scope="col">Group Name</th>
                            <th scope="col">People </th>
                            <th scope="col"> Description </th>
                                <th scope="col">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                    
                                        <td>Mark Group</td>
                                        <td>7</td>
                                        <td>gfgdfghdfg</td>
                                        <td>
                                        <div class="btn-group show-on-hover">
                                            <div class="btn btn-default show-on-hover" data-toggle="dropdown">
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <ul class="dropdown-menu" role="menu">
                                                <div className='downmenu'>
                                                    <li><a href="#">Add Person</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                </div>
                                        
                                            </ul>
                                        </div>
                                        </td>
                                        </tr>
                                        <tr>
                                    
                                        <td>Jacob Group</td>
                                        <td>8</td>
                                        <td>hjdhhdfhdf</td>
                                        <td>
                                        <div class="btn-group show-on-hover">
                                            <div class="btn btn-default show-on-hover" data-toggle="dropdown">
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <ul class="dropdown-menu" role="menu">
                                                <div className='downmenu'>
                                                    <li><a href="#">Add Person</a></li>
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                </div>
                                        
                                            </ul>
                                        </div>
                                        </td>
                                        </tr>
                                        <tr>
                                    
                                        <td>Larry Group</td>
                                        <td>6</td>
                                        <td>yuyuyueryyuery</td>
                                        <td>
                                        <div class="btn-group show-on-hover">
                                            <div class="btn btn-default show-on-hover" data-toggle="dropdown">
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                                <i _ngcontent-rux-c388="" class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <ul class="dropdown-menu" role="menu">
                                                <div className='downmenu'>
                                                    <li><a href="#">Add Person</a></li>
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
                <h4 class="modal-title w-100" id="myModalLabel">Add Groups</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                
            <form>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Group Name</label>
                    <input type="text" id="form4Example1" class="form-control" />
                    
                </div>


                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example3">Description </label>
                    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                    
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
export default Groups