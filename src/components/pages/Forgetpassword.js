import React, { Component } from 'react'
import '../../App.css';
import axios from 'axios';

class Forgetpassword extends Component{

    constructor(props){
        super(props);
        
    }

   handleSubmit(event) {
       event.preventDefault();

       const data = {
        email: this.email
       };

       axios.post('https://givyv2.herokuapp.com/users/api/reset-password', data).then(
           res =>{
               console.log(res)
           }
       ).catch(
           err =>(
               console.log(err)
           )
       )
   };

    render (){
        
    return(
        <>
        <section className='container-fluid mb'>
                <div className='sgin-up'>
                    <h2>Givy <i class='fab fa-typo3' /></h2>
                    <div class="container">
			    <div class="main">
	

			<form onSubmit={this.handleSumit}>
            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1"></label>
                <input type="email" onChange={event => this.email = event.target.value} id="form2Example1" class="form-control" placeholder="Email" />
               
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Forget Password</button>
            </form>
            </div>
        
        </div>
        </div>
        </section>
        </>
    )
}
}
export default Forgetpassword