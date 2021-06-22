import React, { Component } from 'react'

class Review extends Component{


    constructor(props){
        super(props)
        // this.state = { merchid:"800000000605"}
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    handleSubmit = (e) => {

        let base64 = require('base-64');

        let username = "testing"
        let password = "testing123"
        let auth = 'Basic ' + base64.encode(username + ":" + password);
    
        e.preventDefault()
        console.log(this.props);
        fetch ('https://boltgw-uat.cardconnect.com/cardconnect/rest/profile',{
            method: 'POST',
            body: JSON.stringify(this.props.values),
            headers: {
                'Content-Type' : 'application/json',
                "Accept":"application/json",
                "Authorization":auth
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            document.getElementById("error").innerHTML = data["message"]
        })
        .catch(error => console.log('error:', error));
    }
    render(){

        // let merchid = "800000000605"
        
        const { values: {region, phone, accttype, postal, expiry,city,
            country, address, merchid, name, account}} = this.props

        return(
            <div className="pages">
                <div class="container">
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="accordion" class="checkout">
                                <div class="panel checkout-step">
                                    <div> <span class="checkout-step-number">1</span>
                                    <h4 class="checkout-step-title"> 
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" > Summery Details</a></h4>
                                    </div>

                                    <ul class="list-group">
                                    <li class="list-group-item">{ merchid }</li>
                                        <li class="list-group-item">{name }</li>
                                        <li class="list-group-item">{address}</li>
                                        <li class="list-group-item">{city}</li>
                                        <li class="list-group-item">{country}</li>
                                        <li class="list-group-item">{region}</li>
                                        <li class="list-group-item">{phone}</li>
                                        <li class="list-group-item">{postal}</li>
                                        <li class="list-group-item">{account}</li>
                                        <li class="list-group-item">{accttype}</li>
                                        <li class="list-group-item">{expiry}</li>
                                    </ul>
                                    </div>
                  

                            </div>
                            <button type="submit" class="btn btn-primary">
                                    Save
                            </button>
                        
                                    
                         
                           
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        )
    }
 }

 export default Review;
