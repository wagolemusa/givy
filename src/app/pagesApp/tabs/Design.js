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

                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
        </>
    )
}
export default Design