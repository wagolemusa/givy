import React, {Component} from 'react'
import styled from 'styled-components'

export default class Give extends Component{

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
    }
}

export class Howmuch extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }

    render(){

        const Headerd = styled.div`
        background-color: #0f4357;
            height: 40px;
            max-width: 450px;
            color: #ffffff;
            font-size: 22px;
            padding-left: 20px;
            padding-top: 15px;
            padding-bottom: 50px;
        `
        const Button = styled.button`
            font-size: 20px;
            color: #fff;
            background-color: #0f4357;
            border-color: #007bff;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            width: 100%
        `
        const { values, handleChange } = this.props;
        return(
            <div className="pages">
               
                    <Headerd>
                        Choose Amount
                    </Headerd>
                   
                    <div className="page1">
                    <br/>
                        <div class="form-outline mb-4">
                        <input type="number" id="form2Example1"
                            onChange={handleChange('amount')}
                            defaultValue={values.amount} 
                            class="form-control custom-amount-input" placeholder="Amount"
                            required
                        />
                         <br/>
                        <Button type="submit" 
                            onClick={this.continue}
                            class="btn btn-primary btn-block mb-4">
                            Continue &nbsp; <i class="fas fa-arrow-right"></i>
                        </Button>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export  class Inform extends Component{
  
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const Headerd = styled.div`
        background-color: #0f4357;
            height: 40px;
            max-width: 450px;
            color: #ffffff;
            font-size: 22px;
            padding-left: 20px;
            padding-top: 15px;
            padding-bottom: 50px;
        `
        const Button = styled.button`
            font-size: 20px;
            color: #fff;
            background-color: #0f4357;
            border-color: #007bff;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            width: 100%
        `
        const Button1 = styled.button`
            font-size: 25px;
            color: #fff;
            font-weight: 600;
            background-color: #0f4357;
            border-color: #007bff;
            border: 1px solid transparent;
      
        `
        const { values, handleChange } = this.props;
        return(
            <div className="pages">
                  <Headerd>
                  <Button1 type="submit" 
                    onClick={this.back}
                    class="btn btn-primary btn-block mb-4">
                    <i class="fas fa-arrow-left"></i> &nbsp; &nbsp;&nbsp; Information
                 </Button1>
                </Headerd>
                   
                <div className="page1">
                <div class="form-outline mb-4">
                <br/>
                <input type="text" id="form2Example1"
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname} 
                    class="form-control"  placeholder="Firstname" required
                />
              <br/>
                <input type="text" id="form2Example1"
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname} 
                    class="form-control"  placeholder="Lastname" required
                />
                <br/>
                <input type="email" id="form2Example1"
                    onChange={handleChange('email')}
                    defaultValue={values.email} 
                    class="form-control" placeholder="Email" required
                />
                <br/>
                <Button type="submit" 
                    onClick={this.continue}
                    class="btn btn-primary btn-block mb-4">
                    continue  &nbsp; <i class="fas fa-arrow-right"></i>
                </Button>

            </div>
            </div>
        </div>
        )
    }
}

export class Card extends Component{
  
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const Headerd = styled.div`
        background-color: #0f4357;
            height: 120px;
            max-width: 450px;
            color: #ffffff;
            font-size: 22px;
            padding-left: 20px;
            padding-top: 15px;
            padding-bottom: 50px;
        `
       
        const Button = styled.button`
            font-size: 20px;
            color: #fff;
            background-color: #0f4357;
            border-color: #007bff;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            width: 100%
        `
        const Button1 = styled.button`
            font-size: 25px;
            color: #fff;
            font-weight: 600;
            background-color: #0f4357;
            border-color: #007bff;
            border: 1px solid transparent;
      
        `
        const { values, handleChange } = this.props;
        return(
            <div className="pages">
                <div className="tabasa">
                <Headerd>
                  <Button1 type="submit" 
                    onClick={this.back}
                    class="btn btn-primary btn-block mb-4">
                     <i class="fas fa-arrow-left"></i> &nbsp; &nbsp; &nbsp; Payment
                     <br/>  
                </Button1>
              <div className="tabstyle">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#home">CARD</a>
                    </li>
                    <li>

                    </li>
                    <li>
                        
                     </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu1">BANK TRANSFER</a>
                    </li>
                </ul>
              </div>
                </Headerd>        
                </div>
                <div class="tab-content">
                <div id="home" class="container tab-pane active">
                <div className="page1">
                <br/>
                <div class="form-outline mb-4">
                <input type="number" id="form2Example1"
                    onChange={handleChange('account')}
                    defaultValue={values.account} 
                    class="form-control" placeholder="42424242424242" required
                />
                 <br/>
            <div className="row">
                <div className="col">
                <input type="text" id="form2Example1"
                    onChange={handleChange('cvv2')}
                    defaultValue={values.cvv2} 
                    class="form-control" placeholder="Expiration MM/ YY" required
                />
                </div>
                <br/>
                <div className="col">
                
                <input type="text" id="form2Example1"
                    onChange={handleChange('cvv2')}
                    defaultValue={values.postal} 
                    class="form-control" placeholder="CVC Code" required
                />
                </div>
            </div>
            <br/>
                <Button type="submit" 
                    
                    class="btn btn-primary btn-block mb-4">
                    Donate
                </Button>
                
            </div>
            </div>
        </div>
        

        <div id="menu1" class="container tab-pane fade">
        <div className="page1">
        <br/>
            <p>Donate from your bank using Plaid, 
                a secure and encrypted bank transfer service.
            </p>

            <br/>
            <Button type="submit" 
                class="btn btn-primary btn-block mb-4">
                 Donate
            </Button>
        </div>

        </div>
        </div>
        </div>
    
        )
    }
}