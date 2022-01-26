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
import Pray from './components/pages/Pray';
import Member from './components/pages/Member';
import Show from './components/pages/Show';

function Homepage(){
    return (
    <>
        <Router>
            {/* <Navbar/> */}
            <Nav/>
            <Switch>
                <Route  path='/'exact component={Home} />
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/Siginup' component={Siginup} />
                <Route exact path='/Forgetpassword' component={Forgetpassword} />
                <Route exact path='/Contanct' component={Contanct} />
                <Route exact path='/Success' component={Success} />
                <Route exact path='/Pray' component={Pray} />
                <Route exact path='/Member' component={Member} />
                <Route exact path='/Show' component={Show} />


            </Switch> 
            <Footer/>
        </Router>
    </>
    );
}
export default Homepage