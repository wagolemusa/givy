import React, {Component } from 'react'
import axios from 'axios';

let token = localStorage.getItem('token')
// let current_user = localStorage.getItem('current_user')
// let access_token = token2
// let access_token = "Bearer " + token

// let user = JSON.parse(localStorage.getItem('token'));
// const token = user.data.id;

class Addgiver extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()

        const data = {
            firstname:        this.firstname,
            lastname:         this.lastname,
            email:            this.email,
            phone_number:     this.phone_number,
            address:          this.address,
            church_member_id: this.church_member_id
        }

        axios.post('https://givyv2.herokuapp.com/givers/api/create-giver', data,{
            headers: {
                'Authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
		.then(res =>{
			this.setState({
				message: true
			});
		})
		.catch(err =>{
			this.setState({
				message: err.response.data.message
			})
		})
	}


    render(){
        let error ='';
		if (this.state.message){
			error =(
				<div className="alert alert-danger" role="alert">
					{this.state.message}
				</div>
			)
		}

        return(
            <div className="pages">
                <div className="logery">
                    <div className="multform">
                    <h3>Add New Giver</h3>
                    </div>
                    <div className="card">
                        <div class="card-body">
                        <form onSubmit={this.handleSubmit}>
						    {error}
                            <div class="form-outline">
                                <label class="form-label" for="form1">First Name </label>
                                <input type="text"  onChange={event => this.firstname = event.target.value}  id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Last Name</label>
                                    <input type="text"  onChange={event => this.lastname = event.target.value} id="form1" class="form-control" required/>
                            </div>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Email</label>
                                    <input type="email"  onChange={event => this.email = event.target.value} id="form1" class="form-control" required/>
                            </div><br/>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Phone Number</label>
                                    <input type="number"  onChange={event => this.phone_number = event.target.value} id="form1" class="form-control" required/>
                            </div><br/>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">Address</label>
                                    <input type="text" onChange={event => this.address = event.target.value} id="form1" class="form-control" required/>
                            </div><br/>
                            <div class="form-outline">
                                    <label class="form-label" for="form1">church Member ID</label>
                                    <input type="number"  onChange={event => this.church_member_id = event.target.value} id="form1" class="form-control" required/>
                            </div><br/>
                            <button type="submit" class="btn btn-primary">Save New Giver</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export  default Addgiver;
