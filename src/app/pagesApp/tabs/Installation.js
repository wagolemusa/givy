import React, { Component } from 'react'
import axios from 'axios'
import Install from './Install';

let token  = localStorage.getItem("token")
class Installation extends React.Component{
    
        constructor(props){
            super(props)
           
            this.handleSubmit = this.handleSubmit.bind(this)
            
        }

        state ={
            posts: []
           
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


        componentDidMount =() =>{
            this.getAllPost();
        }
        getAllPost = async () =>{
            const { data} = await axios.get("https://givyv2.herokuapp.com/web/api/get/url",{
                headers: {
                    'Authorization': token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            this.setState({posts: data.query})
        
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
                        
                    </div>
                    </div>

                    <div className="gRWngx">
                        <h1>Choose Default URL</h1>
                        <p>This is the URL/Link Givers will see when they go to "Give Now" from their account</p>
                     <select class="select dbSzIv fsEGGn">
                                    Select Website URL
                                {this.state.posts.map((post, index)=>(
                                    <option>Select Website Url</option>,
                                <option key = {index}>{post. weburl.web_url}</option>
                                ))}
                                </select>
                        
                    </div> 
                    <Install/>

                    <div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                    <div class="modal-dialog modal-full-height modal-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title w-100" id="myModalLabel">Add Web URL</h4>
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
                    
                    </div>
                </div>
           </div>

        </>
   )
    } 
}

export default Installation;