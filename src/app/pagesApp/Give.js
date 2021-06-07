import React from 'react'
import Card from './givefolder/Card';
import Inform from './givefolder/Inform';
import Howmuch from './givefolder/Howmuch';

class Give extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        step: 1,
        amount: '',
        firstname: '',
        lastname: '',
        email: '',
        account: '',
        expiry: '',
        cvv2: '',
        postal: ''
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
    
    // Handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});

    }

    render(){
        const { step } = this.state;
        const { amount, firstname, lastname, 
            email, account, expiry, cvv2} = this.state
        const values = { amount, firstname, lastname, 
            email, account, expiry, cvv2}

        switch(step){
            case 1:
                return(
                   <Howmuch
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                   />
                )
                case 2:
                    return(
                        <Inform 
                           nextStep={this.nextStep}
                           prevStep={this.prevStep}
                           handleChange={this.handleChange}
                           values={values} 
                        />
                    )
                case 3:
                    return(
                        <Card
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} 

                        />
                    )
        }
        return(
            <>
            <div className="pages">
                <h2>Refuge Wise</h2>
            </div>
            </>
        )
    }
}

export default Give;