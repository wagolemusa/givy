import React from 'react'

class Message extends React.Component{
    
    userData
    constructor(props){
        super(props);
        this.onChangesmsthankyoutitle = this.onChangesmsthankyoutitle.bind(this)
        this.onChangesmsbody = this.onChangesmsbody.bind(this)
        this.onChangesmsrecieptbody = this.onChangesmsrecieptbody.bind(this)

        this.state = {
            smsthankyoutitle: '',
            smsbody: '',
            smsrecieptbody: ''
        }
    }
    onChangesmsthankyoutitle(event){
        this.setState({ smsthankyoutitle: event.target.value})
    }
    onChangesmsbody(event){
        this.setState({ smsbody: event.target.value })
    }
    onChangesmsrecieptbody(event){
        this.setState({smsrecieptbody: event.target.value })
    }

    onSubmit(event){
        event.preventDefault()
    }

    componentWillMount(){
        this.userData = JSON.parse(localStorage.getItem('message'));
        if(localStorage.getItem('message')){
            this.setState({
                smsthankyoutitle: this.userData. smsthankyoutitle,
                smsbody: this.userData.smsbody,
                smsrecieptbody: this.userData.smsrecieptbody
            })
        }else{
            this.setState({
                smsthankyoutitle: '',
                smsbody: '',
                smsrecieptbody: ''
            })
        }

    }

    componentDidUpdate(nextPress, nextState){
        localStorage.setItem('message', JSON.stringify(nextState))

    }
    render(){
        return(
            <>
           <form onSubmit={this.onSubmit}>
            <div className="gRWngx">
                    <h1>Customize Giving Messages</h1>
                    <p>There are a few key messages in your GivingFlow you can customize to speak directly to your people</p>
                        
                            <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example2">Thank You Title</label>
                                <input type="text"  value={this.state.smsthankyoutitle} onChange={this.onChangesmsthankyoutitle} id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example3">Thank You Message</label>
                                <textarea class="form-control iYhAcm" value={this.state.smsbody} onChange={this.onChangesmsbody} id="form4Example3" rows="4"></textarea>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label jtmHyL" for="form4Example3">Giver Receipt message</label>
                                <textarea class="form-control iYhAcm" value={this.state.smsrecieptbody} onChange={this.onChangesmsrecieptbody} id="form4Example3" rows="4"></textarea>
                            </div>
                            <button type="submit" className="fqIstn">Save Changes</button>
                        </div>
                   </form>
                    

            </>
        )
    }
}

export default Message