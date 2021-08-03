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
        
        const { values: { businessOwnerNames, businessName, county, town, estate, postal,
            businessPhoneNumber}} = this.props

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
                                    <li class="list-group-item">{ businessOwnerNames }</li>
                                        <li class="list-group-item">{businessName }</li>
                                        <li class="list-group-item">{county}</li>
                                        <li class="list-group-item">{town}</li>
                                        <li class="list-group-item">{estate}</li>
                                        <li class="list-group-item">{postal}</li>
                                        <li class="list-group-item">{businessPhoneNumber}</li>
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
