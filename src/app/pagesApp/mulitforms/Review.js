import React, { Component } from 'react'

let token = localStorage.getItem('token')
class Review extends Component{

    constructor(props){
        super(props)
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
        e.preventDefault()
        console.log(this.props);
        fetch ('https://senditparcel.herokuapp.com/api/v2/parcels',{
            method: 'POST',
            body: JSON.stringify(this.props.values),
            headers: {
                'Content-Type' : 'application/json',
                "Accept":"application/json",
                "Authorization":token
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
        
        const { values: {countryCd,
            address1,city,stateCd,zip, legalBusinessName,businessPhone,
            websiteAddress,ownerName,ownerEmail,ownerTitle,ownerMobilePhone,
            ownerDob,ownerSSN,bankAcctNum,bankRoutingNum}} = this.props

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
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" > Location Details</a></h4>
                                    </div>

                                    <ul class="list-group">
                                        <li class="list-group-item">{countryCd }</li>
                                        <li class="list-group-item">{address1}</li>
                                        <li class="list-group-item">{city}</li>
                                        <li class="list-group-item">{stateCd}</li>
                                        <li class="list-group-item">{zip}</li>
                                    </ul>
                                    </div>
                    
                                <div class="panel checkout-step">
                                    <div role="tab" id="headingTwo"> <span class="checkout-step-number">2</span>
                                        <h4 class="checkout-step-title"> 
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" > Business Details </a> </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse">
                                        <div class="checkout-step-body">
                                            <div class="checout-address-step">

                                            <ul class="list-group">
                                                <li class="list-group-item">{legalBusinessName }</li>
                                                <li class="list-group-item"> {businessPhone}</li>
                                                <li class="list-group-item">{websiteAddress}</li>
                                            
                                            </ul>
                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel checkout-step">
                                    <div role="tab" id="headingThree"> <span class="checkout-step-number">3</span>
                                        <h4 class="checkout-step-title"> 
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"  > Business Owner Information</a> </h4>
                                    </div>
                                    <div id="collapseThree" class="panel-collapse collapse">
                                    <div class="checkout-step-body"> 

                                        <ul class="list-group">
                                        <li class="list-group-item">{ownerName }</li>
                                        <li class="list-group-item">{ownerEmail}</li>
                                        <li class="list-group-item">{ownerTitle}</li>
                                        <li class="list-group-item">{ownerMobilePhone}</li>
                                        <li class="list-group-item">{ownerDob}</li>
                                    </ul>     
                                    </div>
                                </div>
                                </div>
                                <div class="panel checkout-step">
                                    <div role="tab" id="headingFour"> <span class="checkout-step-number">4</span>
                                        <h4 class="checkout-step-title"> 
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Bank Information</a> </h4>
                                    </div>
                                    <div id="collapseFour" class="panel-collapse collapse">
                                    <div class="checkout-step-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">{ownerSSN }</li>
                                        <li class="list-group-item"> { bankAcctNum}</li>
                                        <li class="list-group-item">{bankRoutingNum}</li>
                                            
                                    </ul> 
                                    </div>
                                    </div>
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
