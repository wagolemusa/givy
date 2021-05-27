import React, {Component, useState} from 'react';
import {  Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Addgiver from './tabs/Addgiver';
import Fetchdata from './tabs/Fetchdata';

let token = localStorage.getItem('token')
class Giver extends React.Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state ={
        posts: []
    }
    componentDidMount =() =>{
        this.getAllPost();
    }
    getAllPost = async () =>{
        const { data} = await axios.get("https://givyv2.herokuapp.com/givers/api/giver",{
            headers: {
                'Authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        this.setState({posts: data.query})
    
    }

    handleSubmit(event){
        event.preventDefault()

        const data = {
            givername: this.givername,
            amount: this.amount,
            data: this.data,
            fund: this.fund,
            method: this.method

        }

        axios.post('https://givyv2.herokuapp.com/transactions/api/transactions', data,{
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
        // console.log(this.state.posts)
        return(
           
            <div className="pages">
            <div class="container">
                <div className="tabas">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home">Give</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu1">Add Giver</a>
                        </li>
                 
                    </ul>
                </div>
                <div className="sytle_giver">
                    <div class="tab-content">
                        <div id="home" class="container tab-pane active">
                        <div className="gRWngx">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-8">
                                <h1>Choose a Giver</h1>
                                <p>To add a transaction, first you’ll need to say who it belongs to. 
                                    You can start typing in the drop-down below to search and select the giver,
                                    or if you need to enter someone new, just hit the “Add New </p>
                                <select class="select dbSzIv fsEGGn" onChange={event => this.givername = event.target.value}>
                                    Select Giver Name
                                {this.state.posts.map((post, index)=>(
                                    <option>Select Giver Name</option>,
                                <option key = {index}>{post.givers.firstname}</option>
                                ))}
                                </select>
                            {/* <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example2">Giver</label>
                                <input type="text" onChange={event => this.amount = event.target.value} id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                            </div> */}
                            <h1>Enter Transaction Details</h1>
                            <p>Fill out all the information about this gift below to create this new transaction. 
                                Then just hit save to attach it to the giver you selected or added.</p>
                            
                            <div className="row">
                            <div className="col">
                                <div class="form-outline mb-4">
                                    <label class="form-label jtmHyL" for="form4Example2">Amount</label>
                                    <input type="number" onChange={event => this.amount = event.target.value}id="form4Example2" class="form-control dbSzIv fsEGGn" placeholder="$" /> 
                                </div>
                            </div>

                            <div className="col">
                            <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example2">Date</label>
                                <input type="date" onChange={event => this.data = event.target.value} id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                            </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col">
                            <h3>Fund</h3>
                                <select class="select dbSzIv fsEGGn" onChange={event => this.fund = event.target.value}>
                                    <option>Choose One</option>
                                    <option>Youth Fund</option>
                                    <option>Old People Fund</option>
                                    <option>General Fund</option>  
                                </select>
                            </div>
                            <div className="col">
                            <h3>Method</h3>
                            <select class="select dbSzIv fsEGGn" onChange={event => this.method = event.target.value}>
                                <option> Choose One</option>
                                <option>Cash</option>
                                <option>Check</option>
                                <option>Smart Card</option>
                                <option >Other</option>  
                            </select>
                            </div>
                            
                        </div>
                        <button type="submit" className="fqIstn">Save Changes</button>
                    </div>
                    
                </div>
                </form>
            </div>
           
        </div>
    <div id="menu1" class="container tab-pane fade">
        <Addgiver/>
    </div>
 </div>
</div>
</div>
</div>

    )
}
}
export default Giver