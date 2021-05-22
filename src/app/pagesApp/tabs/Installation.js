import React from 'react'

function Installation () {
    return (
        <>
                    <div className="gRWngx">
                        <div className="row">
                            <div className="col-md-9">
                                <h1>Install GivingFlow</h1>
                                <p>To install a GivingFlow on your website, first add its URL to the list below by clicking “Add New”. 
                                Then, type or paste in the full URL of your secured (https) website. Questions?</p>
                            </div>
                            <div className="col-md-3">
                            <button type="submit" className="btn btn-primary btn-rounded"> Add Your Site URL</button>
                            </div>
                            
                            <div className="viewsite"><br/>
                            <h3>WEBSITE URLS</h3>
                                <p>www.kisumuchurh.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="gRWngx">
                        <h1>Choose Default URL</h1>
                        <p>This is the URL/Link Givers will see when they go to "Give Now" from their account</p>
                            <select class="select dbSzIv">
                            <option value="1">www.kisumuchurh.com</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                            </select>
                       
                    </div>       
        </>
    )
}

export default Installation;