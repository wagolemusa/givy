import React from 'react'


function Design (){
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                     <h1>Upload Your Logo</h1>
                     <p>We recommend a strong, simple icon in a single solid color for the best visual impact. Generally speaking, 
                        black or a strong contrast color for light mode, 
                        and white usually works best for dark mode.
                    </p>
                <div className="uploadimage">            
                    <i class="fa fa-pencil-alt"></i>
                <input class="browse-input1" type="file"/>      
                <span class="lu2oe2-3 kryKBZ">Drag and drop here (or tap and browse) to add a logo to your GivingFlow.</span>
                </div>
                <br/>
                <p>Input color that we’ll make sure it looks good everywhere on your GivingFlow and email receipts</p>
                <div class="form-outline mb-4">
                    <label class="form-label jtmHyL" for="form4Example2">Input Color</label>
                    <input type="text" id="form4Example2" class="form-control dbSzIv fsEGGn"/> 
                </div>

                <h2>Enable additional Quick Intervals</h2>

                <p>There are more recurring giving intervals you can make available to your
                church if you like. These options can help people quickly setup a regular 
                 giving that closely aligns with when they receive their paychecks.</p>
                 <select class="select dbSzIv fsEGGn">
                    <option>Choose One</option>
                    <option>EVERY 1ST AND 15TH</option>
                    <option>EVERY 5TH AND 20TH</option>
                </select>
            </div>


            <div className="col-md-6">
           </div>
           <button type="submit" className="fqIstn">Save Changes</button>
        </div>
        </>
    )
}
export default Design