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
                                <label class="form-label" for="form1">Account</label>
                                <input type="number" name="account" 
                                 onChange={handleChange('account')}
                                 defaultValue={values.account} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                <label class="form-label" for="form1">account Type</label>
                                <input type="number" name="accttype"
                                 onChange={handleChange('accttype')}
                                 defaultValue={values.accttype} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                <label class="form-label" for="form1">Expiry</label>
                                <input type="date" name="expiry" 
                                 onChange={handleChange('expiry')}
                                 defaultValue={values.expiry} id="form1" class="form-control" required/>
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