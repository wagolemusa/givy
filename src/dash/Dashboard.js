import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Form from './Form';



function Dashboard(){
    return(
        <>
        <Sidebar/>
        
            <Router>
                <Switch>
                    <Route path='/' exact component={Form} />
                    <Route path='/Form' component={Form} />
                </Switch>
            </Router>
        </>
    )
}
export default Dashboard