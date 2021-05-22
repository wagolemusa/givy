import React from 'react'

const Representative = ({formData, setForm, navigation}) =>{
 
        const { ownerName, ownerEmail, ownerTitle, ownerMobilePhoneteCd, ownerDob } = formData
    return(
        <div className="pages">
                <div className="row">
                <div className="logery">
                <div className="multform">
                <h3>Business Owner Informations</h3>
                </div>
                <div className="card">
                    <div class="card-body">
                        <div class="form-outline">
                        <label class="form-label" for="form1">Owner Church Name</label>
                        <input type="text" name="ownerName" value={ownerName} onChange={setForm} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                                <label class="form-label" for="form1">Owner Email</label>
                                <input type="email" name="ownerEmail" value={ownerEmail} onChange={setForm} id="form1" class="form-control"  required/>
                        </div>
                        <div class="form-outline">
                                <label class="form-label" for="form1">Owner Title</label>
                                <input type="text" name="ownerTitle" value={ownerTitle} onChange={setForm} onChange={setForm} id="form1" class="form-control" required />
                        </div>
                        <div class="form-outline">
                                <label class="form-label" for="form1">Owner Mobile Phone</label>
                                <input type="number" name="ownerMobilePhoneteCd" value={ownerMobilePhoneteCd} onChange={setForm} id="form1" class="form-control" required/>
                        </div>
                        <div class="form-outline">
                                <label class="form-label" for="form1">Owner Date of Birth</label>
                                <input type="date" name="ownerDob" value={ownerDob} onChange={setForm} id="form1" class="form-control" required/>
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

export default Representative;