import React from 'react'
import './pages.css'

function Follow(){
    return(
        <>
            <div class="bg-whight">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-9'>
                        <button type="button" class="btn btn-outline-success my-example-model" data-toggle="modal" data-target="#fullHeightModalRight">
                        <i class="far fa-plus-square"></i> &nbsp;&nbsp;Add  Follow Up 
                        </button>                    
                </div>
                <div className='col-md-3'>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <br/>
            <div className='container'>
            <div class="table-responsive bg-whight">
                <table class="table">
                    <thead>
                        <tr>
                                    
                        <th scope="col">Name</th>
                            <th scope="col">Responsible </th>
                            <th scope="col"> Date</th>
                            <th scope="col">Actions</th>
                            <th scope="col">Type</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>       
                                        <td>Kate Austen</td>
                                        <td>wagole musa</td>
                                        <td>15/02/2021 </td>
                                        <td></td>
                                        <td>Vist</td>
                                        <td>Pading</td>
                                        <td><i class="fas fa-check"></i></td>
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
                                    
                                        <td>Kate Austen</td>
                                        <td>wagole musa</td>
                                        <td>15/02/2021 </td>
                                        <td></td>
                                        <td>Vist</td>
                                        <td>Pading</td>
                                        <td><i class="fas fa-check"></i></td>
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
                                        <td>Kate Austen</td>
                                        <td>wagole musa</td>
                                        <td>15/02/2021 </td>
                                        <td></td>
                                        <td>Vist</td>
                                        <td>Pading</td>
                                        <td><i class="fas fa-check"></i></td>
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


        <div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">

        <div class="modal-dialog modal-full-height modal-right" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title w-100" id="myModalLabel"> Follow Up </h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                    <div className='grew-color'>
                            
                                <label class="form-label" for="form5Example1">People
                                </label>
                                <input type="text" class="form-control" placeholder="People" /> 
                           
                                <label class="form-label" for="form5Example1">Responsible
                                </label>
                                <input type="text" class="form-control" placeholder="Responsible" /> 
                           
                                <label class="form-label" for="form5Example1">Follow up Date</label>
                                <input type="date" class="form-control" placeholder="" /> 
                                <br/>
                                <select class="form-control">
                                    <option selected=""> Type</option>
                                    <option>Vist</option>
                                    <option>Phone</option>
                                    <option>Message</option>
                                </select> 

                                <label class="form-label" for="form5Example1">From</label>
                                <input type="time" class="form-control" placeholder="" /> 
                            
                            
                                <label class="form-label" for="form5Example1">To</label>
                                <input type="time" class="form-control" placeholder="" /> 

                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form4Example3">Note </label>
                                    <textarea class="form-control" id="form4Example3" rows="2"></textarea>
                    
                                </div>
                    </div>
                </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}
export default Follow