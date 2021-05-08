import React, { Component } from 'react';
import axios from 'axios';

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
            <>
                <h1>Refuge wise</h1>
            </>
        )
    }
}
// export default Giver