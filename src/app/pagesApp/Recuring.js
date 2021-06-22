
import React, { Component } from 'react';
import axios from 'axios';
import Installation from './tabs/Installation';
import Design from './tabs/Design';
import Message from './tabs/Message';
import Trigger from './tabs/Trigger';

class Recuring extends Component{

    constructor(props){
        super(props)
        this. handleChange = this. handleChange.bind(this)
    }

    state = {
        step: 1,
        logo_file_id: '',
        color: '',
        sms_thank_you_title: '',
        sms_body: '',
        sms_reciept_body:''
    }

    // Proceed to next step
    nextStep = () =>{
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step

    prevStep = () =>{
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    }

    // Handle input fields Change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value})
    }

    render(){ 
        const { step } = this.state;
        const { logo_file_id, color, sms_thank_you_title, sms_body, sms_reciept_body} = this.state
        const values = {  logo_file_id, color, sms_thank_you_title, sms_body, sms_reciept_body}
        
        switch(step){
            case 1:
                return (
                    <Design
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )

            case 2:
                return(
                    <Message 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <Trigger 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

        }
    }
}
export default Recuring