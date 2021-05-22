import React from 'react'

const Bank = ({formData, setForm, navigation}) =>{
    const { bankRoutingNum, bankAcctNum, ownerSSN } = formData
    return(
        <div className="pages">
            <div className="row">
                <div className="logery">
                    <div className="multform">
                        <h3>Provide Bank Information</h3>
                    </div>
                    <div className="card">
                        <div class="card-body">
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Bank Routing Number</label>
                                    <input type="number" name="bankRoutingNum" value={bankRoutingNum} onChange={setForm} id="form1" class="form-control" required/>
                                </div>
                                <div class="form-outline">
                                    <label class="form-label" for="form1">Bank Account Number</label>
                                    <input type="number" name="bankAcctNum"  value={bankAcctNum} onChange={setForm} id="form1" class="form-control" required/>
                                </div>
                                <div class="form-outline">
                                    <label class="form-label" for="form1">Owner SSN</label>
                                    <input type="text" name="ownerSSN" value={ownerSSN}  onChange={setForm}id="form1" class="form-control" required/>
                                </div>
                                <br/>
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

export default Bank