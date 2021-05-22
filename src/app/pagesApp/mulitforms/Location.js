import React from 'react'

const Location = ({formData, setForm, navigation}) =>{
    const { countryCd, address, city, stateCd, zip } = formData
// console.log(props)

    return(
        <div className="pages">
            <div className="activ">
                <h2>Activate your Account</h2>
            </div>
            <div className="row">
                <div className="logery">
                
                    <div className="multform">
                        <h3>Provide your Location</h3>
                    </div>
                        <div className="card">
                        <div class="card-body">
                        <div class="form-outline">
                            <label class="form-label" for="form1">Country</label>
                            <input type="text" name="countryCd" value={countryCd} onChange={setForm} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">Address</label>
                            <input type="text" name="address" value={address} onChange={setForm} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">City</label>
                            <input type="text" name="city" value={city} onChange={setForm} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">State</label>
                            <input type="text" name="stateCd"  value={stateCd}  onChange={setForm} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                            <label class="form-label" for="form1">Zip</label>
                            <input type="text" name="zip" value={zip} onChange={setForm} id="form1" class="form-control" required/>
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

export default Location