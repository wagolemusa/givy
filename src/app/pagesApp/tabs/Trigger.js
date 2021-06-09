import React from 'react'
import axios from 'axios'

let token = localStorage.getItem('token')


class Trigger extends React.Component{

    constructor(props){
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    state ={
        posts: []
    }
    componentDidMount =() =>{
        this.getAllPost();
    }
    getAllPost = async () =>{
        const { data} = await axios.get("https://givyv2.herokuapp.com/users/api/authenticate",{
            headers: {
                'Authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        this.setState({posts: data.user})
       
    }

    render(){
         console.log(this.state.posts)

         let highdata = this.state.posts._id
        
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
                            <input type="number" id="form4Example2" class="form-control dbSzIv fsEGGn" placeholder="$" /> 
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
                            {/* <select class="select dbSzIv fsEGGn">
                                    Select Website URL
                                {this.state.posts.map((post, index)=>(
                                    <option>Select Website Url</option>,
                                <option key = {index}>{post. weburl.web_url}</option>
                                ))}
                                </select> */}
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
                            <h2>{highdata}</h2>
                        </div>
                </div>
        </>
    )
    }
}

export default Trigger