import React, { Component} from 'react'
import { useForm, useStep } from "react-hooks-helper";
import Location from './mulitforms/Location'
import Business from './mulitforms/Business'


import Bank from './mulitforms/Bank'
import Review from './mulitforms/Review'
import Submit from './mulitforms/Submit'

class Actave extends Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
        state = {
            step: 1,
            businessOwnerNames: "",
            businessName: "",
            county: "",
            town: "",
            estate: "",
            postal: "",
            businessPhoneNumber: ""
        };
    // Proceed to next step
    nextStep = () =>{
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }
    // Go Back to prev step
    prevStep = () =>{
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value });
    }

    render(){
        const { step } = this.state;
        const { businessOwnerNames, businessName, county, town, estate, postal,
            businessPhoneNumber
        }  = this.state

        const values = {businessOwnerNames, businessName, county, town, estate, postal,
            businessPhoneNumber
        }
        switch(step){
            case 1:
                return(
                 <Location
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                 />  
                )
            case 2:
                return(
                    <Business
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}

                    />

                )
            case 3:
                return(
                    <Bank 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return(
                    <Review
                        nextStep={this.nextStep}
                        prevStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}   
                    />
            )
        } 
    }
}

export default Actave