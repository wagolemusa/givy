import React from "react";
import '../pages/pray.css'
import account from './account.png';

const Pray = () => {
    return (
        <section className="praysection">
            <div class="container">
                <div className="prayback">
                    <h1>Became a member by fill in the Details bellow</h1>
                    <div class="modal-body">
                        <div className='container'>

                            <div className='grew-color'>
                                <div class="preview text-center">
                                    <img src={account} class="preview-img" alt="Preview Image" width="200" height="200" />
                                    <div class="browse-button">
                                        <i class="fa fa-pencil-alt"></i>
                                        <input class="browse-input" type="file" required name="UploadedFile" id="UploadedFile" />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='grew-color'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>

                                        <input type="text" id="form5Example1" class="form-control" placeholder="First Name" />
                                    </div>

                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>

                                        <input type="text" id="form5Example1" class="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='grew-color'>
                                <div className='row'>
                                    <div className='col-md-6'>

                                        <label class="form-label" for="form5Example1"></label>
                                        <input type="text" id="form5Example1" class="form-control" placeholder="Middle Name" />
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>
                                        <select class="form-control">
                                            <option selected=""> Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div className='grew-color'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1">Baptism Date</label>
                                        <input type="date" class="form-control" />
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1">Baptism Location</label>
                                        <input type="text" id="form5Example1" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='grew-color'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>

                                        <input type="text" class="form-control" placeholder="Address Line" />

                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>
                                        <input type="text" class="form-control" placeholder="Postal Code" />

                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className='grew-color'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>

                                        <input type="number" id="form5Example1" class="form-control" placeholder="Mobile Phone" />
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>
                                        <input type="email" id="form5Example1" class="form-control" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='grew-color'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>
                                        <input type="text" id="form5Example1" class="form-control" placeholder="Job Title" />
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label" for="form5Example1"></label>
                                        <input type="text" id="form5Example1" class="form-control" placeholder="Employer" />
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                        <button type="button" class="btn btn-success">Save changes</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pray;