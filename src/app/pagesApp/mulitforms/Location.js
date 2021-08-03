import React, { Component } from 'react'

class Location extends Component{

    constructor(props){
        super(props)
        this.state = { merchid:"800000000605"}
    }

    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }

    render(){
        let merchid = "800000000605"
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
                            <label class="form-label" for="form1">Business  Owner Names</label>
                            <input type="text" name="businessOwnerNames" 
                             onChange={handleChange('businessOwnerNames')}
                             defaultValue={values.businessOwnerNames} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">Business Name</label>
                            <input type="text" name="businessName" 
                                onChange={handleChange('businessName')}
                                defaultValue={values.businessName} id="form1" class="form-control" required/>
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