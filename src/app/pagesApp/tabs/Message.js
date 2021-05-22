import React from 'react'

function Message (){
    return(
        <>
                    <div className="gRWngx">
                    <h1>Customize Giving Messages</h1>
                    <p>There are a few key messages in your GivingFlow you can customize to speak directly to your people</p>
                    
                            <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example2">Thank You Title</label>
                                <input type="text" id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example3">Thank You Message</label>
                                <textarea class="form-control iYhAcm" id="form4Example3" rows="4"></textarea>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example3">Giver Receipt message</label>
                                <textarea class="form-control iYhAcm" id="form4Example3" rows="4"></textarea>
                            </div>
                            <button type="submit" className="fqIstn">Save Changes</button>
                    </div>
        </>
    )
}
export default Message