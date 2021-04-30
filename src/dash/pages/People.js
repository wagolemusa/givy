    import React from 'react'
    import './pages.css'
    import account from './account.png'

    function People(){
        return(
            <>
            <div class="bg-whight">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-9'>
                        <button class="btn btn-outline-success btn-lg" data-toggle="modal" data-target="#myModal"><i class="far fa-plus-square"></i> &nbsp;&nbsp;Add Person</button>
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
            </div>
            </div>
            <br/>
                <div className='container'>
                  <div className='table_backgrund'>
                    <div className='row'>
                        
                        <div className='col-md-9 bg-whight'>
                            
                            <div class="table-responsive">
                                <table class="table">
                                <thead>
                                    <tr>
                                  
                                    <th scope="col">Names</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                   
                                    <td>Mark</td>
                                    <td>0765543217</td>
                                    <td>@mdo</td>
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
                                   
                                    <td>Jacob</td>
                                    <td>076594356</td>
                                    <td>@fat</td>
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
                                   
                                    <td>Larry</td>
                                    <td>079986666</td>
                                    <td>@twitter</td>
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
                        
                      
                        
                        <div className='col-md-3 '>
                            <h1>Rrefuge Wise</h1>
                        </div>
                       
                    </div>
                </div> 

    
                    {/* <div className='pages'> */}
                    
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-center">
                            <div class="modal-dialog modal-lg .modal-align-center">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myModalLabel"> Add Person</h4>
                                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span>

                                        </button>
                                        

                                    </div>
                                    <div class="modal-body">
                                        <div className='container'>
                    
                                            <div className='grew-color'>
                                                <div class="preview text-center">
                                                    <img src={account} class="preview-img" alt="Preview Image" width="200" height="200"/>
                                                    <div class="browse-button">
                                                        <i class="fa fa-pencil-alt"></i>
                                                        <input class="browse-input" type="file" required name="UploadedFile" id="UploadedFile"/>
                                                    </div>
                                                </div>  
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <div class="form-group float-label-control">
                                                            <input type="text" class="form-control" placeholder="First Name" />
                                                        </div>
                                                        <div class="form-group float-label-control">
                                                            <input type="text" class="form-control" placeholder="Middle" />
                                                        </div>
                                                    </div>
                                                    <div className='col'>
                                                            <div class="form-group float-label-control">
                                                                <input type="text" class="form-control" placeholder="Last Name" />
                                                            </div>                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <input type="date" class="form-control" />
                                                    </div>
                                                    <div className='col'>
                                                    <div class="form-group1">
                                                        <label>Gender:</label><br/>
                                                        <label><input type="radio" name="gender" required value="Male" checked /> Male</label>
                                                        <label><input type="radio" name="gender" required value="Female" /> Female</label>
                                                        <label><input type="radio" name="gender" required value="Other" /> Other</label>
                                                        <span class="Error"></span>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <input type="text" class="form-control" placeholder="Groups" />  
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <select class="form-control">
                                                            <option selected=""> School</option>
                                                            <option>Sunday School</option>
                                                            <option>Manday School</option>
                                                            <option>Friday School</option>
                                                        </select>
                                                    </div>
                                                    <div className='col'>
                                                    <select class="form-control">
                                                            <option selected=""> Grade</option>
                                                            <option>UnKnown</option>
                                                            <option>1st</option>
                                                            <option>2nd</option>
                                                            <option>3rd</option>
                                                            <option>4th</option>
                                                            <option>5th</option>
                                                            <option>6th</option>
                                                            <option>7th</option>
                                                            <option>8th</option>
                                                            <option>9th</option>
                                                            <option>10th</option>
                                                        </select> 
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <label class="form-label" for="form5Example1">Baptism Date</label>
                                                        <input type="date" class="form-control" />
                                                    </div>
                                                    <div className='col'>
                                                        <label class="form-label" for="form5Example1">Baptism Location</label>
                                                        <input type="text" id="form5Example1" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <input type="text" class="form-control" placeholder="Address Line" />  
                                                        <select class="form-control">
                                                            <option selected=""> Province</option>
                                                            <option></option>
                                                            <option></option>
                                                            <option></option>
                                                        </select>
                                                    </div>
                                                    <div className='col'>
                                                        <input type="text" class="form-control" placeholder="Postal Code" /> 
                                                        <select class="form-control">
                                                            <option selected=""> City</option>
                                                            <option></option>
                                                            <option></option>
                                                            <option></option>
                                                        </select> 
                                                    </div>

                                                </div>
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <input type="number" id="form5Example1" class="form-control" placeholder="Mobile Phone" />
                                                        <input type="number" id="form5Example1" class="form-control" placeholder="Home Phone" />
                                                    </div>
                                                    <div className='col'>
                                                    <input type="email" id="form5Example1" class="form-control" placeholder="Email" />
                                                    <input type="text" id="form5Example1" class="form-control" placeholder="Facebook Link" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                    <input type="text" id="form5Example1" class="form-control" placeholder="Job Title" />
                                                    </div>
                                                    <div className='col'>
                                                        <input type="text" id="form5Example1" class="form-control" placeholder="Employer" />
                                                    </div>
                                                </div>
                                                <input type="text" id="form5Example1" class="form-control" placeholder="Talent And Hobbies" />
                                            </div>
                                            <br/>
                                            <div className='grew-color'>
                                                <div className='row'>
                                                    <div className='col'>
                                                    <label class="form-label" for="form5Example1">Marital Statuse</label>
                                                    <select class="form-control">
                                                            <option selected="">UnKnown</option>
                                                            <option></option>
                                                            <option></option>
                                                            <option></option>
                                                        </select> 
                                                    </div>
                                                    <div className="col">
                                                    <label class="form-label" for="form5Example1">Join Date</label>
                                                    <input type="date" id="form5Example1" class="form-control" placeholder="Talent And Hobbies" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </>
        )
    }
    export default People