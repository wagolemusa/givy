import React from 'react'

function Users(){
    return(
        <>
        <div class="bg-whight">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-9'>
                        <button type="button" class="btn btn-outline-success my-example-model" data-toggle="modal" data-target="#fullHeightModalRight">
                        <i class="far fa-plus-square"></i> &nbsp;&nbsp;Add User
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
        {/* Table */}
        <br/>
        <div className='container'>
            <div class="table-responsive bg-light">
                <table class="table">
                    <thead>
                        <tr>
                                    
                        <th scope="col">Name</th>
                            <th scope="col">Username </th>
                            <th scope="col"> Mobile phone </th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Ministry
                                            Last Access Date
                                </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                    
                                        <td>wagole musa</td>
                                        <td>homiemusa@gmail.com</td>
                                        <td>0765788799</td>
                                        <td>homiemusa@gmail.com</td>
                                        <td>Owner</td>
                                        <td>0/03/2021 </td>
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
                                    
                                        <td>wagole musa</td>
                                        <td>homiemusa@gmail.com</td>
                                        <td>0765788799</td>
                                        <td>homiemusa@gmail.com</td>
                                        <td>Owner</td>
                                        <td>0/03/2021 </td>
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
                                    
                                        <td>wagole musa</td>
                                        <td>homiemusa@gmail.com</td>
                                        <td>0765788799</td>
                                        <td>homiemusa@gmail.com</td>
                                        <td>Owner</td>
                                        <td>0/03/2021 </td>
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
                <h4 class="modal-title w-100" id="myModalLabel">Add User</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
            <select class="form-control">
                <option selected=""> Role</option>
                <option>Sunday School</option>
                <option>Manday School</option>
                <option>Friday School</option>
            </select>
            <br/>
            <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">First Name</label>
                    <input type="text" id="form4Example1" class="form-control" />
                    
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Last Name</label>
                    <input type="text" id="form4Example1" class="form-control" />
                    
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Group Name</label>
                    <input type="text" id="form4Example1" class="form-control" />
                    
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Mobile Phone</label>
                    <input type="number" id="form4Example1" class="form-control" />
                    
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Email</label>
                    <input type="email" id="form4Example1" class="form-control" />
                    
                </div>    
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Password</label>
                    <input type="password" id="form4Example1" class="form-control" />
                    
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
export default Users