import React, { Component} from 'react'
import { useForm, useStep } from "react-hooks-helper";
import Location from './mulitforms/Location'
import Business from './mulitforms/Business'
import Registered from  './mulitforms/Registered'
import Representative from './mulitforms/Representative'
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
            region: "",
            phone: "",
            accttype: "",
            postal: "",
            expiry: "",
            city: "",
            country: "",
            address: "",
            merchid: "",
            name: "",
            account: ""
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
        const { region, phone, accttype, postal, expiry,city,
        country, address, merchid, name, account
        }  = this.state

        const values = { region, phone, accttype, postal, expiry,city,
            country, address, merchid, name, account
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