import React, { Component } from 'react'

class Business extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const { values, handleChange } = this.props;

        return(
            <div className="pages">
            <div className="row">
                <div className="logery">
                    <div className="multform">
                    <div className="row">
                            <div className="col-md-9">
                            <h3>Business Details</h3>
                            </div>
                            <div className="col-md-3">
                            <button
                                    type="submit" 
                                    onClick={this.back}
                                    class="btn btn-light btn-rounded">
                                    <i class="fas fa-arrow-left"></i> &nbsp;Back
                                
                                </button>
                            </div>
                        </div>
                  

                    </div>
                    <div className="card">
                        <div class="card-body">
            
                            <div class="form-outline">
                                <label class="form-label" for="form1">Legal Business Number </label>
                                <input type="text" name="legalBusinessName" 
                                onChange={handleChange('legalBusinessName')}
                                defaultValue={values.legalBusinessName} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Business Phone Number</label>
                                    <input type="number" name="businessPhone" 
                                        onChange={handleChange('businessPhone')}
                                        defaultValue={values.businessPhone} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Website URL</label>
                                    <input type="text" name="websiteAddress" 
                                        onChange={handleChange('websiteAddress')}
                                        defaultValue={values.websiteAddress} id="form1" class="form-control" required/>
                            </div><br/>
                            <button 
                                    onClick={this.continue}
                                    class="btn btn-primary btn-block mb-4">
                                    Continue &nbsp; <i class="fas fa-arrow-right"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        )
    }
}
export default Business;