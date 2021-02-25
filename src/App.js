import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Dashboard from './dash/Dashboard'
import Form from './dash/Form';

function App(){
    return (
    <>

    <Router>
        <Route path='/' exact component={Homepage}/>
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path='/Form' component={Form} />
        
    </Router>
    </>
    );
}
export default App