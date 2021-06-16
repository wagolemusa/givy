import React, { Component } from 'react'

class Location extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }

    render(){
        const { values, handleChange} = this.props;
        return(
            <div className="pages">
            <div className="activ">
                <h2>Activate your Account</h2>
            </div>
            <div className="row">
                <div className="logery">
                
                    <div className="multform">
                        <div className="row">
                            <div className="col-md-9">
                            <h3>Provide your Location</h3>
                            </div>
                        </div>
                    </div>
                        <div className="card">
                        <div class="card-body">
                        <div class="form-outline">
                            <label class="form-label" for="form1">Country</label>
                            <input type="text" name="countryCd" 
                             onChange={handleChange('countryCd')}
                             defaultValue={values.countryCd} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">Address</label>
                            <input type="text" name="address" 
                                onChange={handleChange('address')}
                                defaultValue={values.address} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">City</label>
                            <input type="text" name="city" 
                                onChange={handleChange('city')}
                                defaultValue={values.city} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">State</label>
                            <input type="text" name="stateCd"  
                                onChange={handleChange('stateCd')}
                                defaultValue={values.stateCd} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">Zip</label>
                            <input type="text" name="zip" 
                                onChange={handleChange('zip')}
                                defaultValue={values.zip} id="form1" class="form-control" required/>
                        </div>
                        <br/>
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


export default Location