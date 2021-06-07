import React from 'react'

class Card extends React.Component{
  
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values, handleChange } = this.props;
        return(
            <div className="pages">
                <div class="form-outline mb-4">
                
                <input type="number" id="form2Example1"
                    onChange={handleChange('account')}
                    defaultValue={values.account} 
                    class="form-control" placeholder="42424242424242"
                />
        
                <input type="lastname" id="form2Example1"
                    onChange={handleChange('cvv2')}
                    defaultValue={values.cvv2} 
                    class="form-control" placeholder="CVV"
                />
                
                <input type="email" id="form2Example1"
                    onChange={handleChange('postal')}
                    defaultValue={values.postal} 
                    class="form-control" placeholder="Postal"
                />
                <button type="submit" 
                    onClick={this.continue}
                    class="btn btn-primary btn-block mb-4">
                    continue
                </button>
                <button type="submit" 
                    onClick={this.back}
                    class="btn btn-primary btn-block mb-4">
                    Back
                </button>
            </div>
            </div>
        )
    }
}

export default Card;