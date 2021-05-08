import React, { useState} from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// export default class Siginup extends React.Component{
// 	constructor(props) {
// 		super(props);
	

function Siginup () {

	const [firstname, setFirstname] = useState("");
	const [lastname,  setLastname] = useState("");
	const [churchname, setChurchname]  = useState("");
	const [phone, setPhone]  = useState("");
	const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			firstname,
			lastname,
			churchname,
			phone,
			email,	
			password
		}

		setFirstname('')
		setLastname('')
		setChurchname('')
		setPhone('')
		setEmail('')
        setPassword('')

		axios.post('https://givyv2.herokuapp.com/users/api/register', data)
		.then(res =>{
		console.log(res)
		})
		.catch(err =>{
		console.log(err)
		})
	}

// function Siginup(){	render(){

	
    return(
        <>
            <section className='container-fluid mb'>
                <div className='sgin-up'>
                    <h2>Givy <i class='fab fa-typo3' /></h2>
                    <div class="container">
			<div class="main">
				{/* <div class="main-center"> */}

				<form onSubmit={handleSubmit}>
						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control"  value={firstname} onChange={e => setFirstname(e.target.value)} id="name"  placeholder="First Name"/>
							    </div>
						</div>

						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control" value={lastname} onChange={e => setLastname(e.target.value)} id="name"  placeholder="Last Name"/>
							    </div>
						</div>
						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control" value={churchname} onChange={e => setChurchname(e.target.value)} id="name"  placeholder="Church Name"/>
							    </div>
						</div>
						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="number" class="form-control"value={phone} onChange={e => setPhone(e.target.value)} id="name"  placeholder="Phone Number"/>
							    </div>
						</div>
						<div class="form-group">
							<label for="email"></label>
								<div class="input-group">
									<input type="text" class="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
							</div>
						</div>
						<div class="form-group">
							<label for="password"></label>
								<div class="input-group">
									
									<input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
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
// }
export default Siginup