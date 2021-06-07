import React from 'react'

class Inform extends React.Component{
  
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
                <label class="form-label" for="form2Example1">Enter Firstname</label>
                <input type="number" id="form2Example1"
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname} 
                    class="form-control" 
                />
                <label class="form-label" for="form2Example1">Enter lastname</label>
                <input type="lastname" id="form2Example1"
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname} 
                    class="form-control" 
                />
                <label class="form-label" for="form2Example1">Enter Email</label>
                <input type="email" id="form2Example1"
                    onChange={handleChange('email')}
                    defaultValue={values.email} 
                    class="form-control" 
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

export default Inform;