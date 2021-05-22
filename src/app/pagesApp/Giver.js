import React, { Component } from 'react';
import axios from 'axios';
import Installation from './tabs/Installation';
import Design from './tabs/Design';
import Message from './tabs/Message';
import Trigger from './tabs/Trigger';

let token = localStorage.getItem('token')

export default class Giver extends Component{
    componentDidMount(){
        axios.get('https://givyv2.herokuapp.com/users/api/authenticate',{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : token
              }
        })
        .then(
            res =>{
                this.setState({
                    user: res.data
                });

                console.log(res)
            },
            err =>{
                console.log(err)
            }
        )
    }

    render(){
        // if (this.state.user){
        //     return (
        //         <h2>Hi {this.state.user.firstname}{this.state.firstnameuser.lastname}</h2>
        //     )
        // }

        return(
            <div className="pages">
                <div class="container">
                    <div className="tabas">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#home">Design</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#menu1">Messages</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#menu2">Installation</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#menu3">Triggers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sytle_giver">
                        <div class="tab-content">
                            <div id="home" class="container tab-pane active">
                                <Design/>
                    </div>
                    <div id="menu1" class="container tab-pane fade">
                        <Message/>

                    </div>
                    <div id="menu2" class="container tab-pane fade">
                        <Installation/>

                    </div>

                    <div id="menu3" class="container tab-pane fade">
                        <Trigger/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    
        )
    }
}
// export default Giver