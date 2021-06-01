import React, { Component } from 'react'
import axios from 'axios'

let token  = localStorage.getItem("token")
class Installation extends React.Component{
    
        constructor(props){
            super(props)
            this.state = {}
            this.handleSubmit = this.handleSubmit.bind(this)
        }
    
        handleSubmit(event){
            event.preventDefault()
    
            const data = {
                web_url: this.web_url
            }
    
            axios.post('https://givyv2.herokuapp.com/web/api/url', data,{
                headers: {
                    'Authorization': token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
            }
              })
              .then(res => {
                console.log(res);
              }
              ).catch(err =>{
                console.log(err)
              })
        }
    
    render(){

    
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
                        <button type="button" class="btn btn-primary my-example-model" data-toggle="modal" data-target="#fullHeightModalRight">
                        Add Your Website url
                        </button>                            
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

                    <div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">

                    <div class="modal-dialog modal-full-height modal-right" role="document">


                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title w-100" id="myModalLabel">Modal title</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={this.handleSubmit}>

                        <div class="form-outline mb-4">
                            <label class="form-label jtmHyL" for="form4Example2">Add Website Url</label>
                            <input type="text" onChange={event => this.web_url = event.target.value}  id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                        </div>
                        <button type="submit" className="fqIstn">Save Changes</button>

                        </form>
       
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
           </div>

        </>
   )
    } 
}

export default Installation;