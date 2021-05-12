import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import './App.css'
import Home from './components/pages/home';
import Nav from './components/Nav';
import Login from './components/pages/Login';
import Siginup from './components/pages/Siginup';
import Forgetpassword from './components/pages/Forgetpassword';
import Contanct from './components/pages/Contanct';
import Footer from './components/pages/Footer';
import Success from './components/pages/Success'

function Homepage(){
    return (
    <>
        <Router>
            {/* <Navbar/> */}
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/Siginup' component={Siginup} />
                <Route exact path='/Forgetpassword' component={Forgetpassword} />
                <Route exact path='/Contanct' component={Contanct} />
                <Route exact path='/Success' component={Success} />
            </Switch> 
            <Footer/>
        </Router>
    </>
    );
}
export default Homepage