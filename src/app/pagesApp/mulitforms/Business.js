import React from 'react'

const Business = ({formData, setForm, navigation}) =>{
        const { legalBusinessName, businessPhone, websiteAddress } = formData
    return(
        <div className="pages">
            <div className="row">
                <div className="logery">
                    <div className="multform">
                    <h3>Business Details</h3>
                    </div>
                    <div className="card">
                        <div class="card-body">
            
                            <div class="form-outline">
                                <label class="form-label" for="form1">Legal Business Number </label>
                                <input type="text" name="legalBusinessName" value={legalBusinessName} onChange={setForm} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Business Phone Number</label>
                                    <input type="number" name="businessPhone" value={businessPhone} onChange={setForm} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Website URL</label>
                                    <input type="text" name="websiteAddress" value={websiteAddress} onChange={setForm} id="form1" class="form-control" required/>
                            </div><br/>
                            <button 
                                    type="button" 
                                    class="btn btn-primary"
                                    onClick={() => navigation.next()}
                                >
                                    Next
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Business;