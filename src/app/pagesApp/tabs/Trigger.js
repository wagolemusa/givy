import React from 'react'

function Trigger (){
    return (
        <>
                    <div className="gRWngx">
                        <h1>Create GivingFlow triggers</h1>
                        <p>It’s simple to make a trigger you can use anywhere (on your site, in an email, in your church app) that will open the GivingFlow on your website so you can lead people directly to give from wherever they are.
                         Simply select a URL, add customizations if you like, then copy the link to use</p>

                         <h3>choose A website url</h3>
                            <select class="select dbSzIv fsEGGn">
                            <option value="1">Choose One</option>
                                <option value="1">www.kisumuchurh.com</option>
                            </select>
                    
                    <div className="row">
                        <div className="col">
                            <h3>Suggest an amount</h3>
                            <input type="text" id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                        </div>
                        <div className="col">
                        <h3>Suggest Fund</h3>
                            <select class="select dbSzIv fsEGGn">
                            <option value="1">Choose One</option>
                                <option value="1">Ganeral Fun</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <h3>Suggest frequency</h3>
                            <select class="select dbSzIv fsEGGn">
                                <option value="1">Choose One</option>
                                <option value="1">Just this once</option>
                                <option value="2">Every Week</option>
                                <option value="3">Every two weeks</option>
                                <option value="8">Every Month</option>
                                <option value="8">Every 1st and 15th</option>
                                <option value="8">Every 15th and 20th</option>
                            </select>
                        </div>
                        <div className="col">
                        <h3>Suggest start</h3>
                            <select class="select dbSzIv fsEGGn">
                            <option value="1">Choose One</option>
                                <option value="1">Today</option>
                                <option value="2">Tomorrow</option>
                                <option value="3">Friday</option>
                                <option value="8">Next Week</option>
                            </select>
                            </div>
                        </div>
                
                    <div className="col-md-6">

                    </div>
                 
                    <div className="RWng">
                        <h2>Copy and use this link:</h2>
                    </div>
                        <div className="bjALwV">

                        </div>
                </div>
        </>
    )
}

export default Trigger