import React, { Component} from 'react'

class Bank extends Component{

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
                            <h3>Provide Bank Information</h3>
                            </div>
                            <div className="col-md-3">
                            <button
                                    type="submit" 
                                    onClick={this.back}
                                    class="btn btn-light btn-rounded">
                                    <i class="fas fa-arrow-left"></i>&nbsp; Back
                                </button>
                            </div>
                        </div>
                    
                </div>
                <div className="card">
                    <div class="card-body">
                        <div class="form-outline">
                                <label class="form-label" for="form1">Bank Routing Number</label>
                                <input type="number" name="bankRoutingNum" 
                                 onChange={handleChange('bankRoutingNum')}
                                 defaultValue={values.bankRoutingNum} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                <label class="form-label" for="form1">Bank Account Number</label>
                                <input type="number" name="bankAcctNum"
                                 onChange={handleChange('bankAcctNum')}
                                 defaultValue={values.bankAcctNum} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                <label class="form-label" for="form1">Owner SSN</label>
                                <input type="text" name="ownerSSN" 
                                 onChange={handleChange('ownerSSN')}
                                 defaultValue={values.ownerSSN} id="form1" class="form-control" required/>
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

export default Bank