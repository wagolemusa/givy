import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage';
import Dashboard from './dash/Dashboard';

import Sidebar from './dash/Sidebar';
// import Contribution from './dash/pages/Contribution';
import Form from './dash/pages/Form';



function App(){
    return (
    <>
      <Router>
            <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/dash' component={Dashboard}/>
                <Route path='/dash/Form' component={Form} />
                {/* <Route path='/dash/Contribution' exact component={Contribution}/> */}
            </Switch> 
           
        </Router>
   
    </>
    );
}
export default App