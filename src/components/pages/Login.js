import React from 'react'

function Login(){
    return(
        <>
            <section className='container-fluid mb'>
                <div className='sgin-up'>
                    <h2>Givy <i class='fab fa-typo3' /></h2>
                    <div class="container">
			<div class="main">
				{/* <div class="main-center"> */}
			<form class="" method="#" action="/app/Applink">

            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1"></label>
                <input type="email" id="form2Example1" class="form-control" placeholder="Email" />
               
            </div>


            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2"></label>
                <input type="password" id="form2Example2" class="form-control" placeholder="Password" />
                
            </div>

            
            <div class="row mb-4">
                <div class="col d-flex justify-content-center">
            
                <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                    checked
                    />
                    <label class="form-check-label" for="form2Example3"> Remember me </label>
                </div>
                </div>

                <div class="col">
            
                <a href="/Forgetpassword">Forgot password?</a>
                </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">Log In</button>


            <div class="text-center">
                <p>Not a member? <a href='Siginup'>Register</a></p>
        
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
export default Login