import React, { useState} from 'react'
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Siginup extends React.Component{

		constructor(props){
			super(props)
			this.state = {}
			this.handleSubmit = this.handleSubmit.bind(this)
		}

		handleSubmit(event){
			event.preventDefault()

			const data = {
				firstname: this.firstname,
				lastname: this.lastname,
				churchname: this.churchname,
				phone: this.phone,
				email: this.email,
				password: this.password

			}

		axios.post('https://givyv2.herokuapp.com/users/api/register', data)
		.then(res =>{
			this.setState({
				loggedIn: true
			});
		})
		.catch(err =>{
			this.setState({
				message: err.response.data.message
			})
		})
	}

	render(){
		if (this.state.loggedIn){
			return <Redirect to={'/login'} />;
		}

		let error ='';
		if (this.state.message){
			error =(
				<div className="alert alert-danger" role="alert">
					{this.state.message}
				</div>
			)
		}
	
    return(
        <>
            <section className='container-fluid mb'>
                <div className='sgin-up'>
                    <h2>Givy <i class='fab fa-typo3' /></h2>
                    <div class="container">
			<div class="main">
				{/* <div class="main-center"> */}

				<form onSubmit={this.handleSubmit}>
						{error}
						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control"  onChange={event => this.firstname = event.target.value} id="name"  placeholder="First Name" required/>
							    </div>
						</div>

						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control" onChange={event => this.lastname = event.target.value} id="name"  placeholder="Last Name" required/>
							    </div>
						</div>
						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control" onChange={event => this.churchname = event.target.value} id="name"  placeholder="Church Name" required/>
							    </div>
						</div>
						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="number" class="form-control" onChange={event => this.phone = event.target.value} id="name"  placeholder="Phone Number" required/>
							    </div>
						</div>
						<div class="form-group">
							<label for="email"></label>
								<div class="input-group">
									<input type="email" class="form-control" onChange={event => this.email = event.target.value} placeholder="Email" required/>
							</div>
						</div>
						<div class="form-group">
							<label for="password"></label>
								<div class="input-group">
									
									<input type="password" class="form-control" onChange={event => this.password = event.target.value} placeholder="Password" required/>
								</div>
						</div>

						{/* <div class="form-group">
							<label for="confirm"></label>
								<div class="input-group">
									<input type="password" class="form-control" name="confirm" placeholder="Confirm Password"/>
								</div>
						</div> */}

                        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
						<div class="text-center">
							<br/>
                	<p>Aready A member <Link to='./login'>login</Link></p>
        
            </div>
					</form>
				</div>
			</div>
		</div>
                {/* </div> */}
            </section>

        </>
	)
	}
}
export default Siginup