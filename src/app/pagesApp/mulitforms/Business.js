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
                                <label class="form-label" for="form1">Region</label>
                                <input type="text" name="region" 
                                onChange={handleChange('region')}
                                defaultValue={values.region} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Phone</label>
                                    <input type="number" name="phone" 
                                        onChange={handleChange('phone')}
                                        defaultValue={values.phone} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Postal</label>
                                    <input type="text" name="postal" 
                                        onChange={handleChange('postal')}
                                        defaultValue={values.postal} id="form1" class="form-control" required/>
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