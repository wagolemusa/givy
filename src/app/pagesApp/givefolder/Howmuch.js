import React from 'react'

class Howmuch extends React.Component{
  
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }

    render(){
        const { values, handleChange } = this.props;
        return(
            <div className="pages">
                <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Enter Amount</label>
                <input type="number" id="form2Example1"
                    onChange={handleChange('amount')}
                    defaultValue={values.amount} 
                    class="form-control" 
                />
                <button type="submit" 
                    onClick={this.continue}
                    class="btn btn-primary btn-block mb-4">
                    Send
                </button>
            </div>
            </div>
        )
    }
}

export default Howmuch;