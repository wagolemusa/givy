import React, { Component } from 'react'
import axios from 'axios'

let token  = localStorage.getItem("token")
class Install extends React.Component{
        
    userData;
        constructor(props){
            super(props)
           
            // this.handleSubmit = this.handleSubmit.bind(this)
            this.onChangebuttonoffsetleft = this.onChangebuttonoffsetleft.bind(this)
            this.onChangebuttonoffsetright = this.onChangebuttonoffsetright.bind(this)
            this.onChangebuttonside = this.onChangebuttonside.bind(this)
            this.onChangebuttonpostion = this.onChangebuttonpostion.bind(this)
            
            this.state = {
                buttonoffsetleft: "left",
                buttonoffsetright: "right",
                buttonside: '',
                buttonpostion: '',
                
            }
            
        }

        onChangebuttonoffsetleft(event){
            this.setState({ buttonoffsetleft: event.target.value })
        }
        onChangebuttonoffsetright(event){
            this.setState({ buttonoffsetright: event.target.value })
        }
        onChangebuttonpostion(event){
            this.setState({ buttonside: event.target.value })
        }
        onChangebuttonside(event){
            this.setState({ buttonpostion: event.target.value })
        }

    onSubmit(event){
        event.prevateDefualt()
    }

    componentWillMount(){
        this.userData = JSON.parse(localStorage.getItem('installation'));
        if(localStorage.getItem('installation')){
            this.setState({
                buttonoffsetleft: this.userData.buttonoffsetleft,
                buttonoffsetright: this.userData.buttonoffsetright,
                buttonside: this.userData.buttonside,
                buttonpostion: this.userData.buttonpostion
            })
        }else{
            this.setState({
                buttonoffsetleft: '',
                buttonoffsetright: '',
                buttonside: '',
                buttonpostion: ''
            })
        }
    }
    componentDidUpdate(nextpress, nextState){
        localStorage.setItem('installation', JSON.stringify(nextState))
    }
    render(){

    
        return (
            <>
            <div className="gRWngx">
                        <div className="row">
                        <form onSubmit={this.onSubmit}>
                            <div className="col-md-6">
                                <h1>Customize Your Give Button</h1>
                                <p>Simply select or input a color, and we’ll make sure it
                                looks good everywhere on your GivingFlow and email receipts.</p>
                                <p>SCREEN POSITION</p>
                            <div className="row">
                            
                                <div className="col">
                                    <label class="customradio"><span class="radiotextsty">Left</span>
                                    <input type="radio" value={this.state.buttonoffsetleft} onChange={this.onChangebuttonoffsetleft} name="radio"/>
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className="col">  
                                    <label class="customradio"><span class="radiotextsty">Right</span>
                                    <input type="radio" value={this.state.buttonoffsetright} onChange={this.onChangebuttonoffsetright} name="radio"/>
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="form-outline mb-4">
                                        <label class="form-label jtmHyL" for="form4Example2">botton offset</label>
                                        <input type="number" value={this.state.buttonside} onChange={this.onChangebuttonside} id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-outline mb-4">
                                        <label class="form-label jtmHyL" for="form4Example2">side offset</label>
                                        <input type="number" value={this.state.buttonpostion} onChange={this.onChangebuttonpostion} id="form4Example2" class="form-control dbSzIv fsEGGn" /> 
                                    </div>
                                </div>
                    
                            </div>
                           
                            </div>
                            </form>
                            <div className="col-md-6">
                                <h3>vvvvvvvvvv</h3>
                            </div>
                        </div>
                        <button type="submit" className="fqIstn">Save Changes</button>
                    </div>                
    
            </>
       )
        } 
    }
    
    export default Install;