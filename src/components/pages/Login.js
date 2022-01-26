import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        const data = {
            churchname: this.churchname,
            password: this.password
        }

        axios.post('https://givyv2.herokuapp.com/users/api/authenticate', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)

                this.setState({
                    loggedIn: true
                });

                // this.props.useUser(res.data.user)
            })
            .catch(err => {
                this.setState({
                    // message: err.response.data.message
                })

            })
    };

    render() {

        if (this.state.loggedIn) {
            window.location.replace("/dash/pages/Dash")
        }

        let error = '';
        if (this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
        return (
            <>
                <section className='logiup-top'>
                    <div className='sgin-up'>
                        <h2>Givy <i class='fab fa-typo3' /></h2>
                        <div class="container">
                            <div class="main">
                                {/* <div class="main-center"> */}
                                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>

                                    {error}

                                    <div id="reg"></div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form2Example1"></label>
                                        <input type="text" onChange={event => this.churchname = event.target.value} id="form2Example1" class="form-control" placeholder="Email"
                                            required
                                        />
                                    </div>


                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form2Example2"></label>
                                        <input type="password" onChange={event => this.password = event.target.value} id="form2Example2" class="form-control" placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block mb-4">Log In</button>
                                    <div class="text-center">
                                        <Link to="/Member">Members Longin</Link>

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
export default Login