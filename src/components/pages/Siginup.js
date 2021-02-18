import React from 'react'
import '../../App.css';

function Siginup(){
    return(
        <>
            <section className='container-fluid mb'>
                <div className='sgin-up'>
                    <h2>Givy <i class='fab fa-typo3' /></h2>
                    <div class="container">
			<div class="main">
				<div class="main-center">

					<form class="" method="post" action="#">
						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control" name="name" id="name"  placeholder="First Name"/>
							    </div>
						</div>

						<div class="form-group">
							<label for="name"></label>
								<div class="input-group">
				                    <input type="text" class="form-control" name="name" id="name"  placeholder="Last Name"/>
							    </div>
						</div>

						<div class="form-group">
							<label for="email"></label>
								<div class="input-group">
									<input type="text" class="form-control" name="email" placeholder="Email"/>
							</div>
						</div>

						<div class="form-group">
							<label for="username"></label>
								<div class="input-group">
									<input type="text" class="form-control" name="username" placeholder="Church Name"/>
								</div>
						</div>

						<div class="form-group">
							<label for="password"></label>
								<div class="input-group">
									
									<input type="password" class="form-control" name="password" placeholder="Password"/>
								</div>
						</div>

						<div class="form-group">
							<label for="confirm"></label>
								<div class="input-group">
									<input type="password" class="form-control" name="confirm" placeholder="Confirm Password"/>
								</div>
						</div>

                        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
						
					</form>
				</div>
			</div>
		</div>
                </div>
            </section>

        </>
    )
}
export default Siginup