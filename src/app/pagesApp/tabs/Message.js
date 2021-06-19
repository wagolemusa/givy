import React from 'react'
// import { __values } from 'tslib';

class Message extends React.Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values, handleChange } = this.props;
        return(
            <div className="pages">
                <div className="gRWngx">
                        <h1>Customize Giving Messages</h1>
                        <p>There are a few key messages in your GivingFlow you can customize to speak directly to your people</p>
                            
                                <div class="form-outline mb-4">
                                    <label class="form-label jtmHyL" for="form4Example2">Thank You Title</label>
                                    <input type="text"  
                                    onChange={handleChange('sms_thank_you_title')} 
                                    defaultValue={values.sms_thank_you_title} id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                                </div>
                                <div class="form-outline mb-4">
                                    <label class="form-label jtmHyL" for="form4Example3">Thank You Message</label>
                                    <textarea class="form-control iYhAcm" 
                                    onChange={handleChange('sms_body')}
                                    defaultValue={values.sms_body}
                                    id="form4Example3" rows="4"></textarea>
                                </div>
                                <div class="form-outline mb-4">
                                    <label class="form-label jtmHyL" for="form4Example3">Giver Receipt message</label>
                                    <textarea class="form-control iYhAcm" 
                                    onChange={handleChange('sms_reciept_body')}
                                    defaultValue={values.sms_reciept_body}
                                     id="form4Example3" rows="4"></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    onClick={this.continue}
                                     className="fqIstn">
                                         Continue
                                </button>
                                <button 
                                    type="submit" 
                                    onClick={this.back} 
                                    className="fqIstn">
                                        Back
                                </button>
                        </div>
            </div>
        )
    }
}

export default Message