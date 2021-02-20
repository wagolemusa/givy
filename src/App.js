import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/home';
import Nav from './components/Nav';
import Login from './components/pages/Login';
import Siginup from './components/pages/Siginup';
import Forgetpassword from './components/pages/Forgetpassword';
import Contanct from './components/pages/Contanct';
import Footer from './components/pages/Footer';

function App(){
    return (
    <>
        <Router>
            {/* <Navbar/> */}
            <Nav/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Login' component={Login}/>
                <Route path='/Siginup' component={Siginup} />
                <Route path='/Forgetpassword' component={Forgetpassword} />
                <Route path='/Contanct' component={Contanct} />
            </Switch> 
            <Footer/>
        </Router>
    </>
    );
}
export default App